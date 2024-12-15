import axios from 'axios';
import { Event } from '@/infra/interfaces/events.interface';

const api = axios.create({
  baseURL: '/api/events',
});

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await api.get('/');
  return response.data;
};

export const getEventById = async (id: string): Promise<Event | null> => {
  const response = await api.get(`/?id=${id}`);
  return response.data;
};

export const getEventBySlug = async (slug: string): Promise<Event | null> => {
  const response = await api.get(`/?slug=${slug}`);
  return response.data;
};

export const createEvent = async (eventData: Event): Promise<Event> => {
  const response = await api.post('/', eventData);
  return response.data;
};

export const updateEvent = async (id: string, eventData: Partial<Event>): Promise<Event> => {
  const response = await api.put(`/?id=${id}`, eventData);
  return response.data;
};

export const deleteEvent = async (id: string): Promise<void> => {
  await api.delete(`/?id=${id}`);
};
