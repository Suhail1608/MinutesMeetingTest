/*
  Warnings:

  - Added the required column `awd` to the `meeting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `meeting` ADD COLUMN `awd` INTEGER NOT NULL;
