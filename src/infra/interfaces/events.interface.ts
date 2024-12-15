export interface Event {
  id: string;
  title: string;
  description: string;
  longDescription: string; 
  date: Date; 
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  slug: string; 
  place: string;
}
