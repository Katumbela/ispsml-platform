-- AlterTable
ALTER TABLE `course` MODIFY `course_cover` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `department` MODIFY `department_cover` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `departmentdirector` MODIFY `picture` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `event` MODIFY `longDescription` LONGTEXT NOT NULL,
    MODIFY `imageUrl` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `news` MODIFY `image` LONGTEXT NOT NULL;
