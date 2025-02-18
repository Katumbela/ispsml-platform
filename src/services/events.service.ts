import axios from 'axios';
import { Event } from '@/infra/interfaces/events.interface';

class EventService {
  private api = axios.create({
    baseURL: '/api/events',
  });

  async getAllEvents(): Promise<Event[]> {
    const response = await this.api.get('/');
    return response.data;
  }

  async getEventById(id: string): Promise<Event | null> {
    const response = await this.api.get(`/?id=${id}`);
    return response.data;
  }

  async getEventBySlug(slug: string): Promise<Event | null> {
    const response = await this.api.get(`/?slug=${slug}`);
    return response.data;
  }

  async createEvent(eventData: Event): Promise<Event> {
    const response = await this.api.post('/', eventData);
    return response.data;
  }

  async updateEvent(id: string, eventData: Partial<Event>): Promise<Event> {
    const response = await this.api.put(`/?id=${id}`, eventData);
    return response.data;
  }

  async deleteEvent(id: string): Promise<void> {
    await this.api.delete(`/?id=${id}`);
  }
}

export default new EventService();
