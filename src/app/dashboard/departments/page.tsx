/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState, useEffect } from "react";
import { getDepartments, getCoursesByDepartment } from "@/services/dep.service";
import { ICourse, IDepartment } from "@/infra/interfaces/course.interface";
import CourseForm from "./components/add-course-form";
import { addCourseToDepartment } from "@/services/course.service";


const DepartmentList: React.FC = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | null>(null);
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    async function fetchDepartments() {
      const data = await getDepartments();
      setDepartments(data);
    }
    fetchDepartments();
  }, []);

  const handleSelectDepartment = async (departmentId: number) => {
    setSelectedDepartmentId(Number(departmentId));
    const data = await getCoursesByDepartment(Number(departmentId));
    setCourses(data);
  };

  const handleAddCourse = async (course: ICourse): Promise<void> => {
    console.log("Adding course:", course);
    if (selectedDepartmentId) {
      const formData = new FormData();
      formData.append("course", course as any);
      // console.log(formData);
      // Add other course fields to formData if necessary
      await addCourseToDepartment(Number(selectedDepartmentId), formData);
      const updatedCourses = await getCoursesByDepartment(Number(selectedDepartmentId));
      setCourses(updatedCourses);
    }
  };

  return (
    <div className="py-32 containers">
      <h1 className="mb-4 text-2xl font-bold">Departments</h1>
      <ul className="space-y-2">
        {departments.map((department) => (
          <li key={department.id}>
            <button
              className="text-blue-500"
              onClick={() => handleSelectDepartment(Number(selectedDepartmentId) === Number(department.id) ? 0 : Number(department.id))}
            >
              {department.name} - {department.courses ? department.courses.length : 0} Cursos
            </button>
          </li>
        ))}
      </ul>

      {selectedDepartmentId && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Courses</h2>
          <ul className="space-y-2">
            {courses.map((course) => (
              <li key={course.id}>{course.course}</li>
            ))}
          </ul>

          <h2 className="mt-4 text-xl font-bold">Add New Course</h2>
          <CourseForm onSubmit={handleAddCourse} />
        </div>
      )}
    </div>
  );
};


export default DepartmentList