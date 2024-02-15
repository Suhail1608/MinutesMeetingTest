/*
  Warnings:

  - Added the required column `district` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internalDistrict` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teams` ADD COLUMN `district` VARCHAR(191) NOT NULL,
    ADD COLUMN `internalDistrict` VARCHAR(191) NOT NULL,
    ADD COLUMN `level` VARCHAR(191) NOT NULL;
