import AxiosHttpClient from '@/http/axiosHttpClient';
import { News } from '@/infra/interfaces/news';

class NewsService {
  private httpClient = new AxiosHttpClient();
  private route = "/news";

  async getAllNews(): Promise<News[] | []> {
    const response = await this.httpClient.get(this.route);
    return response.data as News[];
  }

  async getNewsById(id: string): Promise<News | null> {
    const response = await this.httpClient.get(`${this.route}/${id}`);
    return response.data as News;
  }

  async getNewsBySlug(slug: string): Promise<News | null> {
    const response = await this.httpClient.get(`${this.route}/slug/${slug}`);
    return response.data as News;
  }

  async createNews(newsData: News): Promise<News> {
    const response = await this.httpClient.post(this.route, newsData);
    return response.data as News;
  }

  async updateNews(id: number, newsData: Partial<News>): Promise<News> {
    const response = await this.httpClient.put(`${this.route}/${id}`, newsData);
    return response.data as News;
  }

  async deleteNews(id: number): Promise<void> {
    await this.httpClient.delete(`${this.route}?id=${id}`);
  }
}

export const newsService = new NewsService();
