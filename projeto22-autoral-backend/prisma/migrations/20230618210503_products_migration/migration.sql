/*
  Warnings:

  - You are about to drop the `types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `stock` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "fk_product_model";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "stock" INTEGER NOT NULL;

-- DropTable
DROP TABLE "types";
