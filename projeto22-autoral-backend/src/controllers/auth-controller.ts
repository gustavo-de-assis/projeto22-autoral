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
    console.log(error);

    if (error.name === "ConflictError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }

    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}

export async function checkUserSession(req: Request, res: Response) {
  const { token } = req.cookies;
  console.log(token);

  /* 
  if (!token) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  } */

  try {
    const session = await authService.checkSession(token);
    if (session) {
      return res.sendStatus(httpStatus.OK);
    } else {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
