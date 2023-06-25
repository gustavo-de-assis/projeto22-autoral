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
  const { name, email, password } = newUser;

  return await prisma.users.create({
    data: {
      name,
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
