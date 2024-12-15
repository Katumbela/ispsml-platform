import { Department } from '@/infra/data/interfaces';
import axios from 'axios';

class DepartmentService {
  private api = axios.create({
    baseURL: '/api/departments',
  });

  async getAllDepartments(): Promise<Department[]> {
    const response = await this.api.get('/');
    return response.data;
  }

  async getDepartmentById(id: string): Promise<Department | null> {
    const response = await this.api.get(`/?id=${id}`);
    return response.data;
  }

  async createDepartment(departmentData: Department): Promise<Department> {
    const response = await this.api.post('/', departmentData);
    return response.data;
  }

  async updateDepartment(id: string, departmentData: Partial<Department>): Promise<Department> {
    const response = await this.api.put(`/?id=${id}`, departmentData);
    return response.data;
  }

  async deleteDepartment(id: string): Promise<void> {
    await this.api.delete(`/?id=${id}`);
  }
}

export default new DepartmentService();
