import { prisma } from "@/config";
import { CreateUserParams } from "@/protocols";

async function findUserByEmail(email: string) {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function createUser(newUser: CreateUserParams) {
  return prisma.users.create({
    data: {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    },
  });
}

const userRepository = {
  findUserByEmail,
  createUser,
};

export default userRepository;
