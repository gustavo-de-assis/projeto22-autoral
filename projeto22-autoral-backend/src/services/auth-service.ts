import userRepository from "@/repositories/user-repository";
import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { invalidCredentialsError } from "./errors";
import sessionRepository from "@/repositories/session-repository";
import { CreateUserParams } from "@/protocols";

export async function signUp(params: CreateUserParams) {
  const { email, password } = params;

  const userAlreadyExists = await userRepository.findUserByEmail(email);
  if (userAlreadyExists) {
    throw invalidCredentialsError();
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userParams = { email, password: hashedPassword } as CreateUserParams;
  return userRepository.createUser(userParams);
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

  const token = await createSession(user.id);
  delete user.password;
  return {
    user,
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

export type SignInParams = Pick<users, "email" | "password">;

type SignInResult = {
  user: Pick<users, "id" | "email">;
  token: string;
};

const authService = {
  signIn,
  signUp,
};

export default authService;
