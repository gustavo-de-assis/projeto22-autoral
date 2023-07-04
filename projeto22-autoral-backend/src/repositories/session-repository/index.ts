import { prisma } from "@/config";

async function create(auth_id: number, token: string) {
  return prisma.sessions.create({
    data: {
      auth_id,
      token,
    },
  });
}

async function getSession(auth_id: number, token: string) {
  return prisma.sessions.findFirst({
    where: {
      auth_id,
      token,
    },
  });
}

async function upsertSession(authId: number, token: string) {
  const existingSession = await prisma.sessions.findFirst({
    where: {
      auth_id: authId,
    },
  });

  if (existingSession) {
    return prisma.sessions.updateMany({
      where: {
        auth_id: authId,
      },
      data: {
        token: token,
      },
    });
  } else {
    return prisma.sessions.create({
      data: {
        auth_id: authId,
        token: token,
      },
    });
  }
}

async function deleteSession(id: number) {
  await prisma.sessions.delete({
    where: {
      id,
    },
  });
}

const sessionRepository = {
  create,
  getSession,
  upsertSession,
  deleteSession,
};

export default sessionRepository;
