-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pic" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "linkedin" TEXT,
    "x" TEXT,
    "team" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Phrase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    CONSTRAINT "Phrase_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "postDate" DATETIME NOT NULL,
    "poster" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sponsor" BOOLEAN
);

-- CreateTable
CREATE TABLE "Year" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "Year_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "course" TEXT NOT NULL,
    "interest" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "category" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "slug" TEXT NOT NULL,
    "place" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "catalog_link" TEXT,
    "department_cover" TEXT,
    "directorId" TEXT NOT NULL,
    CONSTRAINT "Department_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Director" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "picture" TEXT
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "short_detail" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "long_description" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "shift_afternoon" BOOLEAN,
    "shift_morning" BOOLEAN,
    "shift_evening" BOOLEAN,
    "course_cover" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "shiftId" TEXT,
    CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "YearDetail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "YearDetail_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Semester" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "semester" INTEGER NOT NULL,
    "yearDetailId" TEXT NOT NULL,
    "yearId" TEXT,
    CONSTRAINT "Semester_yearDetailId_fkey" FOREIGN KEY ("yearDetailId") REFERENCES "YearDetail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Semester_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "semesterId" TEXT NOT NULL,
    CONSTRAINT "Subject_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
