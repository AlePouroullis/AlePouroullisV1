import { createClient } from "contentful";

export const CONTENT_TYPE_BLOGPOST = "blogPost";
export const CONTENT_TYPE_AUTHOR = "author";
export const CONTENT_TYPE_TAGS = "tag";

const Space = process.env.CONTENTFUL_SPACE_ID;
const Token = process.env.CONTENTFUL_ACCESS_TOKEN;

export class ContentfulService {
  private client = createClient({
    // @ts-ignore
    space: Space,
    // @ts-ignore
    accessToken: Token,
  });

  async fetchPostBySlug(slug) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      "fields.slug": slug,
    });
  }

  async getAllTags() {
    const content = await this.client.getEntries({
      content_type: CONTENT_TYPE_TAGS,
    });

    const tags = content.items.map(
      ({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        name: fields.name,
      })
    );

    return { tags };
  }

  public async getBlogPostEntries(
    { tags }: { tags?: string } = {
      tags: "",
    }
  ) {
    try {
      // repsonse is ordered by date from latest to oldest (note the minus behind "fields.publishDate"; without it
      // it would be in chronological order).
      const contents = await this.client.getEntries({
        include: 1,
        ...(tags !== "" && { "fields.tags.sys.id[in]": tags }),
        content_type: CONTENT_TYPE_BLOGPOST,
        order: "-fields.publishDate",
      });

      const entries = contents.items.map(
        ({ sys, fields }: { sys: any; fields: any }) => ({
          id: sys.id,
          title: fields.title,
          description: fields.description,
          slug: fields.slug,
          tags: fields.tags ? fields.tags : null,
          publishedAt: fields.publishDate,
        })
      );

      const total = contents.total;

      return { entries, total };
    } catch (error) {
      console.error(error);
    }
  }

  async getPostBySlug(slug) {
    try {
      const content: any = await this.fetchPostBySlug(slug);

      const entry: { sys: any; fields: any } = content.items[0];

      const author = {
        name: entry.fields.author.fields.name,
        shortBio: entry.fields.author.fields.shortBio,
      };

      return {
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.body,
        title: entry.fields.title,
        description: entry.fields.description,
        tags: entry.fields.tags,
        author: { ...author, id: entry.fields.author.sys.id },
        publishedAt: entry.fields.publishDate
          ? new Date(entry.fields.publishDate)
          : new Date(entry.sys.createdAt),
      };
    } catch (error) {
      console.error(error);
    }
  }
}
