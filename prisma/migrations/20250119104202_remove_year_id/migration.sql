-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_yearId_fkey";

-- AlterTable
ALTER TABLE "Semester" ALTER COLUMN "yearId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE SET NULL ON UPDATE CASCADE;
