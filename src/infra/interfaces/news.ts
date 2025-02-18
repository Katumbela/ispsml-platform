/* eslint-disable @typescript-eslint/no-explicit-any */

export interface News {
  id?: any;
  title: string;
  shortDescription: string;
  content: string;
  postDate: Date;
  poster: string;
  link: string;
  slug: string;
  image: string;
}