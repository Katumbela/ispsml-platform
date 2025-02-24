/* eslint-disable import/no-anonymous-default-export */
import AxiosHttpClient from '@/http/axiosHttpClient';
import { Department } from '@/infra/data/interfaces';

class DepartmentService {
  private httpClient = new AxiosHttpClient();
  private route = "/departments";

  async getAllDepartments(): Promise<Department[]> {
    const response = await this.httpClient.get(this.route);
    return response.data as Department[];
  }

  async getDepartmentById(id: string): Promise<Department | null> {
    const response = await this.httpClient.get(`${this.route}/${id}`);
    return response.data as Department;
  }

  async createDepartment(departmentData: Department): Promise<Department> {
    const response = await this.httpClient.post(this.route, departmentData);
    return response.data as Department;
  }

  async updateDepartment(id: string, departmentData: Partial<Department>): Promise<Department> {
    const response = await this.httpClient.put(`${this.route}/${id}`, departmentData);
    return response.data as Department;
  }

  async deleteDepartment(id: string): Promise<void> {
    await this.httpClient.delete(`${this.route}/${id}`);
  }
}

export const departmentService = new DepartmentService();
