import React, { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blog.module.css";
import utilStyles from "../../styles/util.module.css";

import { ContentfulService } from "../../core/api/contentful";
import { BlogPost } from "../../interfaces/blogPost";
import BlogPostLink from "../../components/blogPostLink";
import { defaultMetaTags } from "../../core/constants";
import Select from "react-select";

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

  const selectedOptions =
    selectedTags.length === 0
      ? { value: "ALL_POSTS", label: "All posts" }
      : selectedTags.map((tag) => ({ value: tag.id, label: tag.name }));

  const handleSelectionChange = (value, actionMeta) => {
    console.log(value);
    console.log(actionMeta);
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value": {
        if (actionMeta.removedValue.value !== "ALL_POSTS") {
          setSelectedTags(
            selectedTags.filter(
              (tag) => tag.id !== actionMeta.removedValue.value
            )
          );
        }
        break;
      }
      case "select-option": {
        setSelectedTags([
          ...selectedTags,
          { id: actionMeta.option.value, name: actionMeta.option.label },
        ]);
        break;
      }
      case "clear": {
        setSelectedTags([]);
        break;
      }
    }
  };

  return (
    <Layout
      pageName="blog"
      metaTags={defaultMetaTags}
      title="Blog | Alé Pouroullis"
    >
      <div className={`${styles["blog-posts"]} blog-posts`}>
        <h1 className={`${styles.header}`}>Latest posts</h1>
        <div className={`${styles.filter}`}>
          <span className={`${styles["filter-text"]}`}>Filter by tag</span>
          <Select
            value={selectedOptions}
            onChange={handleSelectionChange}
            isMulti
            isClearable={selectedTags.length !== 0}
            className={`${styles.select}`}
            name="tags"
            options={tags.map((tag) => ({ value: tag.id, label: tag.name }))}
          />
        </div>
        <div className="posts-list">{posts(entries)}</div>
      </div>
      <div className={`${styles.paginator}`}>
        <Paginator
          handlePaginationChange={(e) => updatePage(e)}
          range={range}
          skip={page}
        />
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

  const postLimit = 4;
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
