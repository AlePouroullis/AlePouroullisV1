import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import styles from '../../../styles/blogPost.module.css';
import { ContentfulService } from "../../../core/api/contentful";
import { BlogPost } from "../../../interfaces/blogPost";
import Layout from "../../../components/layout";
import { defaultMetaTags } from "../../../core/constants";
import {
  MetaTags,
  PageType,
  RobotsContent,
} from "../../../interfaces/metaTags";
import dateFormatter from "../../../utils/dateFormatter";
import TagList from "../../../components/tagList/tagList";

type Props = {
  article: BlogPost;
};

const PostPage: NextPage<Props> = ({ article }) => {
  const postMetaTags: MetaTags = {
    ...defaultMetaTags,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.article,
    description: `${article.description}`,
  };

  const date = new Date(article.publishedAt);
  return (
    <Layout pageName="blog-post" metaTags={postMetaTags} title={article.title}>
      <div className={`post-container ${styles['post-container']}`}>
        <div className="post-header">
          <h1>{article.title}</h1>
          <div className={`metadata ${styles['metadata-container']}`}>
              <p className={styles.author}>{article.author.name}</p>
            <time className={`date ${styles.date}`} dateTime={date.toString()}>
              {dateFormatter.getDate(date)}
            </time>
            <TagList tags={article.tags} />
          </div>
          
        </div>
        <ReactMarkdown className="markdown">{article.body}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const contentfulService = new ContentfulService();

  const { post } = query;
  const article = await contentfulService.getPostBySlug(post);

  article.publishedAt = JSON.parse(JSON.stringify(article.publishedAt));
  return { props: { article } };
}

export default PostPage;
