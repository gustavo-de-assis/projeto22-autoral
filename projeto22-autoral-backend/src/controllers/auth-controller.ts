import { Request, Response } from "express";
import httpStatus from "http-status";
import authService, { SignInParams } from "@/services/auth-service";
import { CreateUserParams } from "@/protocols";

export async function singIn(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function signUp(req: Request, res: Response) {
  const { name, email, password } = req.body as CreateUserParams;
  try {
    const result = await authService.signUp({ name, email, password });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}
