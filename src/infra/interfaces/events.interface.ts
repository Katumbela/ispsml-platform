export interface Event {
  id: string;
  title: string;
  description: string;
  longDescription: string; // nova propriedade
  date: string;
  time: string;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  slug: string; // nova propriedade
}
