import { Prisma } from "@prisma/client";
import { prisma } from "@/config";
import dayjs from "dayjs";

async function create(userId: number, token: string) {
  return prisma.sessions.create({
    data: {
      userId,
      token,
    },
  });
}

async function getSession(userId: number, token: string) {
  return prisma.sessions.findFirst({
    where: {
      userId,
      token,
    },
  });
}

async function upsertSession(userId: number, token: string) {
  return prisma.sessions.upsert({
    where: {
      userId,
    },
    create: {
      userId,
      token,
    },
    update: {
      token,
    },
  });
}

const sessionRepository = {
  create,
  getSession,
  upsertSession,
};

export default sessionRepository;
