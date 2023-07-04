import userRepository from "@/repositories/user-repository";
import { authentication, user_information } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { invalidCredentialsError } from "./errors";
import sessionRepository from "@/repositories/session-repository";
import { CreateUserParams } from "@/protocols";
import { conflictError } from "@/errors/conflict-error";
import { notFoundError } from "@/errors/not-found-error";
import { badRequestError } from "@/errors/bad-request-error";

export async function signUp(params: CreateUserParams) {
  const { name, email, password } = params;

  const userAlreadyExists = await userRepository.findUserByEmail(email);
  if (userAlreadyExists) {
    throw conflictError();
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userParams = {
    name,
    email,
    password: hashedPassword,
  } as CreateUserParams;

  return await userRepository.createUser(userParams);
}

export async function signIn(email: string, password: string) {
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw notFoundError();
  }

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) {
    throw invalidCredentialsError();
  }

  const token = await createSessionToken(user.id);

  await sessionRepository.upsertSession(user.id, token);
  delete user.password, user.created_at;

  const result = {
    id: user.id,
    email: user.email,
    name: user.user_information[0].name,
  };

  return {
    result,
    token,
  };
}

async function createSessionToken(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h", //time in miliseconds or specified like "1h"
  });
  return token;
}

export async function checkSession(token: string) /* : Promise<boolean>  */ {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { userId } = decoded as { userId: number };

    const session = await sessionRepository.getSession(userId, token);

    if (!session) {
      throw notFoundError();
    } else {
      const user = await userRepository.findUserById(session.auth_id);
      return user;
    }
  } catch (error) {
    throw badRequestError();
  }
}

export type SignInParams = Pick<authentication, "email" | "password">;
export type SignUpParams = Pick<authentication, "email" | "password"> &
  Pick<user_information, "name">;

/* type SignInResult = {
  user: Pick<authentication, "email" | "id"> & Pick<user_information, "name">;
  token: string;
}; */

const authService = {
  signIn,
  signUp,
  checkSession,
};

export default authService;
