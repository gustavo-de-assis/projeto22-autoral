import { userSchema } from "@/schemas/auth-schema";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function validateUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.body;

  const validationError = userSchema.validate(user, {
    abortEarly: false,
  }).error;

  if (validationError) {
    const error = validationError.details.map((e) => e.message);
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }

  next();
}
