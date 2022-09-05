import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { getHref } from "../../core/api/helpers";
import styles from "./blogPostLink.module.css";

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    publishedAt: Date;
    slug: string;
    tags: { fields: { name: string } }[];
  };
};

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const BlogPostLink: FunctionComponent<Props> = ({ info }) => {
  const [datePublished, setDatePublished] = useState("");

  useEffect(() => {
    const date = new Date(info.publishedAt);
    setDatePublished(
      `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
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
      {!!info.tags && (
        <ul className={styles["list"]}>
          {info.tags.map((tag, index) => (
            <li className={styles['list-item']} key={tag.fields.name}>
              {index !== 0 && <span className={styles.middot}>&middot;</span>}
              <span className={styles.tag}>{tag.fields.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPostLink;
