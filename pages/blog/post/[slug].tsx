import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { useRouter } from 'next/router';
import { ContentfulService } from "../../../core/api/contentful";
import { BlogPost } from "../../../interfaces/blogPost";
import Layout from "../../../components/layout";
import { defaultMetaTags } from "../../../core/constants";
import { MetaTags, PageType, RobotsContent} from '../../../interfaces/tag';

type Props = {
  article: BlogPost;
};

const PostPage: NextPage = (props: Props) => {
  const postMetaTags: MetaTags = {
    ...defaultMetaTags,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.article,
    description: `${props.article.description}`
  };
  return (
    <Layout metaTags={postMetaTags} title={props.article.title}>
      <div className="post-container">
        <div className="post-header">
          <h1>{props.article.title}</h1>
          <div className="author">
            <p>Written by {props.article.author.name}</p>
          </div>
        </div>
        <ReactMarkdown className="markdown">{props.article.body}</ReactMarkdown>
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
