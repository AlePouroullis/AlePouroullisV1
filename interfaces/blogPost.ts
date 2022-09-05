import { Author } from './author';
import { Tag } from './tag';

export type BlogPost = {
   title: string;
   slug: string;
   description: string;
   body: any;
   author: Author;
   tags: Tag[];
   publishedAt: Date;
}