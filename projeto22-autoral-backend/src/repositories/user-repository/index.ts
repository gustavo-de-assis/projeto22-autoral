import { prisma } from "@/config";
import { CreateUserParams } from "@/protocols";
import { authentication, user_information } from "@prisma/client";

async function findUserByEmail(email: string) {
  return await prisma.authentication.findUnique({
    where: {
      email,
    },
  });
}

async function createUser(newUser: CreateUserParams) {
  const { name, email, password } = newUser;

  const user = await createLogin(email, password);

  return await prisma.user_information.create({
    data: {
      auth_id: user.id,
      name,
    },
  });
}

async function createLogin(email: string, password: string) {
  return await prisma.authentication.create({
    data: {
      email,
      password,
    },
  });
}

const userRepository = {
  findUserByEmail,
  createUser,
};

export default userRepository;
