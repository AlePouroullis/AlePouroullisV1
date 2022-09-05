import React, { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ContentfulService } from "../../core/api/contentful";
import { BlogPost } from "../../interfaces/blogPost";
import BlogPostLink from "../../components/blogPostLink";
import { defaultMetaTags } from "../../core/constants";

import Layout from "../../components/layout";
import Paginator from "../../components/paginator";
import TagFilters from "../../components/tagFilters";

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

const posts = (entries) =>
  entries.map((entry, index) => <BlogPostLink info={entry} key={index} />);

type Props = {
  entries: BlogPost[];
  tags: { id: string; name: string }[];
  url: any;
  total: number;
  skip: number;
  limit: number;
  page?: number;
};

const BlogHomePage: FunctionComponent<Props> = (props) => {
  const router = useRouter();
  const entries = props.entries.length ? props.entries : [];
  const tags = props.tags || [];
  const total = props.total;

  const limit = props.limit;
  const rangeLimit = Math.ceil(total / limit);
  const range = calculateRange(rangeLimit);

  const [page, updatePage] = useState(!!props.page ? props.page : 1);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    void router.push({
      pathname: "/blog",
      query: {
        page: page,
        tags: selectedTags.map((tag) => tag.id).join(","),
      },
    });
  }, [page, selectedTags, router]);


  return (
    <Layout metaTags={defaultMetaTags} title="Blog | Alé Pouroullis">
      <div className="blog-page">
        <div className="blog-posts">
          <h1>Latest posts</h1>
          <div className="posts-list">{posts(entries)}</div>
        </div>
        <div className="sidenav">
          <TagFilters
            tags={tags}
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
          />
        </div>
        <div className="pagination">
          <Paginator
            handlePaginationChange={(e) => updatePage(e)}
            range={range}
            skip={page}
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const contentfulService = new ContentfulService();
  let page: number = 1;

  if (query.page) {
    page = parseInt(query.page + "");
  }

  const postLimit = 3;
  const { entries, total, skip, limit } =
    await contentfulService.getBlogPostEntries({
      tags: decodeURI(query.tags),
      skip: (page - 1) * postLimit,
      limit: postLimit,
    });

  entries.forEach((entry) => {
    entry.publishedAt = JSON.parse(JSON.stringify(entry.publishedAt));
  });
  const { tags } = await contentfulService.getAllTags();

  return { props: { page, tags, entries, total, skip, limit } };
}

export default BlogHomePage;
