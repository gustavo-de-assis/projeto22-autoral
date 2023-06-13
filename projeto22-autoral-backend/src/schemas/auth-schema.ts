import Joi from "joi";
import { SignInParams } from "@/services/auth-service";

export const userSchema = Joi.object<SignInParams>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
