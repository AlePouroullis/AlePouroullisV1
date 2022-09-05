import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { getHref } from "../../core/api/helpers";

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    publishedAt: Date;
    slug: string;
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
  // let date = new Date(info.publishedAt);
  // const formattedDate = date.toLocaleString();
  useEffect(() => {
   const date = new Date(info.publishedAt);
    setDatePublished(`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="blog-post-link">
      {/* <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
       */}
      <time className="date" dateTime={info.publishedAt.toString()}>{datePublished}</time>
      <Link href={getHref(info.slug)}>
        <a className="action">
          <h3 className="heading">{info.title}</h3>
          <p className="description">{info.description}</p>
        </a>
      </Link>
    </div>
  );
};

export default BlogPostLink;
