import { DiscussionEmbed } from "disqus-react";
import React from "react";
import { BlogPost } from "../../interfaces/blogPost";

type Props = {
  post: BlogPost;
};

const DisqusComments: React.FC<Props> = ({ post }) => {
  const disqusShortname = "your-disqus-shortname";
  const disqusConfig = {
    url: `https://alepouroullis/blog/post/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
