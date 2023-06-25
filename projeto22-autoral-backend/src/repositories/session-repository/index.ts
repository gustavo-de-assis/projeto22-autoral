import { Prisma } from "@prisma/client";
import { prisma } from "@/config";
import dayjs from "dayjs";

async function create(data: Prisma.sessionsUncheckedCreateInput) {
  return prisma.sessions.create({
    data,
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

async function updateSession(userId: number, token: string) {
  return prisma.sessions.update({
    where: {
      userId,
    },
    data: {
      token,
      createdAt: dayjs().valueOf().toLocaleString(),
    },
  });
}

const sessionRepository = {
  create,
  getSession,
  updateSession,
};

export default sessionRepository;
