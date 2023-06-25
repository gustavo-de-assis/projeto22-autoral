import userRepository from "@/repositories/user-repository";
import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { invalidCredentialsError } from "./errors";
import sessionRepository from "@/repositories/session-repository";
import { CreateUserParams } from "@/protocols";
import { conflictError } from "@/errors/conflict-error";

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

export async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw invalidCredentialsError();
  }

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) {
    throw invalidCredentialsError();
  }

  const token = await createSessionToken(user.id);
  delete user.password;

  await updateSession(user.id, token);

  return {
    user,
    token,
  };
}

async function createSessionToken(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 60000, //time in miliseconds or specified like "1h"
  });
  /*  await sessionRepository.create({
    token,
    userId,
  }); */

  return token;
}

async function updateSession(userId: number, token: string) {
  await sessionRepository.updateSession(userId, token);
}

export async function checkSession(token: string): Promise<boolean> {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decoded as { userId: number };

    const session = await sessionRepository.getSession(userId, token);
    if (!session) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

export type SignInParams = Pick<users, "email" | "password">;
export type SignUpParams = Pick<users, "email" | "name" | "password">;

type SignInResult = {
  user: Pick<users, "id" | "email">;
  token: string;
};

const authService = {
  signIn,
  signUp,
  checkSession,
};

export default authService;
