import { Role } from '@/infra/data/interfaces';
import axios from 'axios';

class RoleService {
  private api = axios.create({
    baseURL: '/api/roles',
  });

  async getAllRoles(): Promise<Role[]> {
    const response = await this.api.get('/');
    return response.data;
  }

  async getRoleById(id: string): Promise<Role | null> {
    const response = await this.api.get(`/?id=${id}`);
    return response.data;
  }

  async createRole(roleData: Role): Promise<Role> {
    const response = await this.api.post('/', roleData);
    return response.data;
  }

  async updateRole(id: string, roleData: Partial<Role>): Promise<Role> {
    const response = await this.api.put(`/?id=${id}`, roleData);
    return response.data;
  }

  async deleteRole(id: string): Promise<void> {
    await this.api.delete(`/?id=${id}`);
  }
}

export default new RoleService();
