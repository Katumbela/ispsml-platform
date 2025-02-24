/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosHttpClient from "@/http/axiosHttpClient";
import { ICourse, IDepartment } from "@/infra/interfaces/course.interface";


const httpClient = new AxiosHttpClient();
const route = "/departments";

export const createDepartment = async (formData: IDepartment) => {
    const response = await httpClient.post(`${route}`, formData);
    return response.data;
};


export const getDepartments = async (): Promise<IDepartment[]> => {
    const response = await httpClient.get(`${route}`);
    return response.data as IDepartment[];
};

export const getDepartmentBySlug = async (slug: string): Promise<IDepartment | null> => {
    const response = await httpClient.get(`${route}/slug/${slug}`);
    return response.data as IDepartment;
};

export const getDepartmentById = async (id: number): Promise<IDepartment | null> => {
    const response = await httpClient.get(`${route}/${id}`);
    return response.data as IDepartment;
};

// Obter cursos de um departamento
export const getCoursesByDepartment = async (departmentId: number): Promise<ICourse[]> => {
    const response = await httpClient.get(`${route}/${departmentId}/courses`);
    return response.data as ICourse[];
};