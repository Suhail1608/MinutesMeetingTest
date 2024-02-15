/*
  Warnings:

  - You are about to alter the column `img` on the `meeting` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `meeting` MODIFY `img` JSON NOT NULL;
