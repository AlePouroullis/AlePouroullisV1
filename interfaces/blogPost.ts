import { Author } from './author';

export type BlogPost = {
   title: string;
   slug: string;
   description: string;
   body: any;
   author: Author;
   publishDate: Date;
}