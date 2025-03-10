/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosHttpClient from "@/http/axiosHttpClient";
import { IRole } from "@/infra/data/roles-data";

const httpClient = new AxiosHttpClient();
const route = "/roles";

export const getAllRoles = async (): Promise<IRole[] | []> => {
    const response = await httpClient.get(route);
    return response.data as IRole[];
};

export const getRoleById = async (id: number): Promise<IRole | null> => {
    const response = await httpClient.get(`${route}/${id}`);
    return response.data as IRole;
};

export const createRole = async (roleData: IRole): Promise<IRole | null> => {
    const response = await httpClient.post(route, roleData);
    return response.data as IRole;
};

export const updateRole = async (id: number, roleData: IRole): Promise<IRole | null> => {
    const response = await httpClient.patch(`${route}/${id}`, roleData);
    return response.data as IRole;
};

export const deleteRole = async (id: number): Promise<any | null> => {
    const response = await httpClient.delete(`${route}/${id}`);
    return response.data;
};
