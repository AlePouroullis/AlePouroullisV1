import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { getHref } from "../../core/api/helpers";
import styles from "./blogPostLink.module.css";
import dateFormatter from '../../utils/dateFormatter';
import TagList from "../tagList/tagList";
import {Tag} from '../../interfaces/tag';

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    publishedAt: Date;
    slug: string;
    tags: Tag[];
  };
};

const BlogPostLink: FunctionComponent<Props> = ({ info }) => {
  const [datePublished, setDatePublished] = useState("");

  useEffect(() => {
    const date = new Date(info.publishedAt);
    setDatePublished(
      dateFormatter.getDate(date)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="blog-post-link">
      <div className="metadata">
        <time className="date" dateTime={info.publishedAt.toString()}>
          {datePublished}
        </time>
      </div>
      <Link href={getHref(info.slug)}>
        <a className="action">
          <h3 className="heading">{info.title}</h3>
          <p className="description">{info.description}</p>
        </a>
      </Link>
      <TagList tags={info.tags}/>
    </div>
  );
};

export default BlogPostLink;
