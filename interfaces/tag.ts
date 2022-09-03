export enum PageType {
  website = "website",
  article = "article",
}

export enum RobotsContent {
  follow = "follow",
  index = "index",
  no_follow = "nofollow",
  no_index = "noindex",
}

export type MetaTags = {
  title: string;
  author?: string;
  description: string;
  type: PageType;
  image: string;
  og_image?: string;
  og_type?: PageType;
  robots: string;
  og_title?: string;
  og_description?: string;
  og_URL?: string;
  canonical: string;
  og_site_name?: string;
};
