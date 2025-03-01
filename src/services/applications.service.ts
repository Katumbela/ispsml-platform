/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosHttpClient from "@/http/axiosHttpClient";
import { Application } from "@/infra/data/interfaces";

const httpClient = new AxiosHttpClient();
const route = "/applications";

export const getAllApplications = async (): Promise<Application[] | []> => {
    const response = await httpClient.get(route);
    return response.data as Application[];
};

export const getApplicationById = async (id: number): Promise<Application | null> => {
    const response = await httpClient.get(`${route}/${id}`);
    return response.data as Application;
};

export const createApplication = async (ApplicationData: Application): Promise<Application | null> => {
    const response = await httpClient.post(route, ApplicationData);
    return response.data as Application;
};

export const updateApplication = async (id: number, ApplicationData: Application): Promise<Application | null> => {
    const response = await httpClient.put(`${route}/${id}`, ApplicationData);
    return response.data as Application;
};

export const deleteApplication = async (id: number): Promise<any | null> => {
    const response = await httpClient.delete(`${route}/${id}`);
    return response.data;
};
