/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosHttpClient from "@/http/axiosHttpClient";
import { ICourse } from "@/infra/interfaces/course.interface";
import { departments } from '../infra/global.vars';

const httpClient = new AxiosHttpClient();
const route = "/courses";

export const deleteCourse = async (id: number): Promise<any | null> => {
    const response = await httpClient.delete(`${route}/${id}`);
    return response.data;
};

// Adicionar um curso a um departamento
export const addCourseToDepartment = async (departmentId: number, courseData: any): Promise<ICourse | null> => {
    const response = await httpClient.post(route, { ...courseData, departmentId: departmentId });
    return response.data as ICourse;
};

export const updateCourse = async (id: number, courseData: ICourse): Promise<ICourse | null> => {
    const { id: idd, department, years, shift, ...dataWithoutId } = courseData;
    const response = await httpClient.put(`${route}/${id}`, dataWithoutId);
    return response.data as ICourse;
};

export const getCourseBySlug = async (slug: string): Promise<ICourse | null> => {
    const response = await httpClient.get(`${route}/slug/${slug}`);
    return response.data as ICourse;
};

export const getAllCourses = async (): Promise<ICourse[] | []> => {
    const response = await httpClient.get(`${route}`);
    return response.data as ICourse[];
};

export const getCourseById = async (id: number): Promise<ICourse | null> => {
    const response = await httpClient.get(`${route}/${id}`);
    return response.data as ICourse;
};
