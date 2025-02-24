import axios from 'axios';
import { Event } from '@/infra/interfaces/events.interface';
import AxiosHttpClient from '@/http/axiosHttpClient';


class EventService {
  private api = axios.create({
    baseURL: '/api/events',
  });

  private httpClient = new AxiosHttpClient();
  private route = "/events";

  async getAllEvents(): Promise<Event[]> {
    const response = await this.httpClient.get(this.route);
    return response.data as Event[];
  }

  async getEventById(id: number): Promise<Event | null> {
    const response = await this.httpClient.get(`${this.route}/${id}`);
    return response.data as Event;
  }

  async getEventBySlug(slug: string): Promise<Event | null> {
    const response = await this.httpClient.get(`${this.route}?slug=${slug}`);
    return response.data as Event;
  }

  async createEvent(eventData: Event): Promise<Event> {
    const response = await this.httpClient.post(this.route, eventData);
    return response.data as Event;
  }

  async updateEvent(id: number, eventData: Partial<Event>): Promise<Event> {
    const response = await this.httpClient.put(`${this.route}/${id}`, eventData);
    return response.data as Event;
  }

  async deleteEvent(id: string): Promise<void> {
    await this.httpClient.delete(`${this.route}/?id=${id}`);
  }
}

export const eventsService = new EventService();
