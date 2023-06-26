import Joi from "joi";
import { SignUpParams } from "@/services/auth-service";

export const userSchema = Joi.object<SignUpParams>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
