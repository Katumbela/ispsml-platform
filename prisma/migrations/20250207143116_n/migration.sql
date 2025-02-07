/*
  Warnings:

  - You are about to drop the column `slug` on the `departmentdirector` table. All the data in the column will be lost.
  - Added the required column `slug` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `department` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `departmentdirector` DROP COLUMN `slug`;
