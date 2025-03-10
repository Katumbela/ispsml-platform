export interface Event {
  id?: string;
  title: string;
  description: string;
  longDescription: string;
  date: Date;
  category: string;
  imageUrl: string | File;
  isFeatured: boolean;
  slug: string;
  place: string;
}
