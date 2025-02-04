"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ICourse, IDepartment } from '@/infra/interfaces/course.interface';
import { getCoursesByDepartment, getDepartmentById } from '@/services/dep.service';

const DepartmentCoursesPage = () => {
    const [courses, setCourses] = useState<ICourse[] | []>([]);
    const [department, setDepartments] = useState<IDepartment | null>(null);

    const router = useRouter();
    const { id: departmentId } = useParams()

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await getCoursesByDepartment(Number(departmentId) || 0);

            setCourses(response);
        };
        const fetchDep = async () => {
            const dep = await getDepartmentById(Number(departmentId) || 0);

            setDepartments(dep);
        };
        fetchCourses();
        fetchDep();
    }, [departmentId]);

    const handleAddCourse = () => {
        router.push(`${departmentId}/${departmentId}`);
    };

    return (

        <div>
            <div className="h-20 mb-10 bg-gray-800" />

            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">{department?.name}</h1>
                <h1 className="mb-4 text-2xl font-bold">Cursos</h1>
                <button
                    onClick={handleAddCourse}
                    className="px-4 py-2 text-white rounded bg-primary"
                >
                    Adicionar Curso
                </button>
                <div className="mt-4">
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 mb-2 border rounded"
                        >
                            <h2 className="text-xl font-semibold">{course.course}</h2>
                            <p>{course.short_detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default DepartmentCoursesPage;