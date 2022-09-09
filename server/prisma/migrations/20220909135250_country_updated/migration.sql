/*
  Warnings:

  - You are about to drop the column `flag` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `x` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "flag",
DROP COLUMN "x",
DROP COLUMN "y";
