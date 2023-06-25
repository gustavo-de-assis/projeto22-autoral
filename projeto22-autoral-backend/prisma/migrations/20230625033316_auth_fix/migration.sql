/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `usersInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "usersInfo_userId_key" ON "usersInfo"("userId");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
