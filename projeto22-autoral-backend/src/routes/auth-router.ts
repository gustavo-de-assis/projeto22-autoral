import { signUp, singIn } from "@/controllers/auth-controller";
import { validateUserMiddleware } from "@/middlewares/authentication-middleware";
import { Router } from "express";

const authRouter = Router();

authRouter
  .post("/login", singIn)
  .post("/signup", validateUserMiddleware, signUp);

export { authRouter };
