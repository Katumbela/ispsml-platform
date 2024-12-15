import { News } from '@/infra/interfaces/news';
import axios from 'axios';

class NewsService {
  private api = axios.create({
    baseURL: '/api/news',
  });

  async getAllNews(): Promise<News[] | []> {
    const response = await this.api.get('/');
    return response.data;
  }

  async getNewsById(id: string): Promise<News | null> {
    const response = await this.api.get(`/?id=${id}`);
    return response.data;
  }

  async createNews(newsData: News): Promise<News> {
    const response = await this.api.post('/', newsData);
    return response.data;
  }

  async updateNews(id: string, newsData: Partial<News>): Promise<News> {
    const response = await this.api.put(`/?id=${id}`, newsData);
    return response.data;
  }

  async deleteNews(id: string): Promise<void> {
    await this.api.delete(`/?id=${id}`);
  }
}

export default new NewsService();
