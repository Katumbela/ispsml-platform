/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICourse, IDepartment } from "@/infra/interfaces/course.interface";
import axios from "axios";

export const createDepartment = async (formData: FormData) => {
    const response = await axios.post("/api/departments", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};


export const getDepartments = async (): Promise<IDepartment[]> => {
    const response = await axios.get("/api/departments");
    return response.data;
};


// Adicionar um curso a um departamento
export const addCourseToDepartment = async (departmentId: string, courseData: any) => {
    // console.log(departmentId);
    const response = await axios.post(`/api/courses`, { ...courseData, departmentId: departmentId });
    return response.data;
};

// Obter cursos de um departamento
export const getCoursesByDepartment = async (departmentId: string): Promise<ICourse[]> => {
    const response = await axios.get(`/api/departments/${departmentId}/courses`);
    return response.data;
};