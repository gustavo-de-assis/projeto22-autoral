import { users } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type CreateUserParams = Pick<users, "email" | "password">;
