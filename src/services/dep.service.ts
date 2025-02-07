/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICourse, IDepartment } from "@/infra/interfaces/course.interface";
import axios from "axios";

export const createDepartment = async (formData: IDepartment) => {
    const response = await axios.post("/api/departments", formData);
    return response.data;
};


export const getDepartments = async (): Promise<IDepartment[]> => {
    const response = await axios.get("/api/departments");
    return response.data;
};

export const getDepartmentBySlug = async (slug: string): Promise<IDepartment | null> => {
    const response = await axios.get("/api/departments?slug=" + slug);
    return response.data;
};

export const getDepartmentById = async (id: number): Promise<IDepartment | null> => {
    const response = await axios.get("/api/departments?id=" + id);
    return response.data;
};


export const deleteCourse = async (id: number): Promise<any | null> => {
    const response = await axios.delete("/api/courses?id=" + id);
    return response.data;
};

export const getCourseBySlug = async (slug: string): Promise<any | null> => {
    const response = await axios.get("/api/courses?slug=" + slug);
    return response.data;
};


// Adicionar um curso a um departamento
export const addCourseToDepartment = async (departmentId: number, courseData: any) => {
    // console.log(departmentId);
    const response = await axios.post(`/api/courses`, { ...courseData, departmentId: departmentId });
    return response.data;
};

// Obter cursos de um departamento
export const getCoursesByDepartment = async (departmentId: number): Promise<ICourse[]> => {
    const response = await axios.get(`/api/departments/${departmentId}/courses`);
    return response.data;
};