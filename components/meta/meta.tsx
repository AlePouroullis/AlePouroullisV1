import React, { Fragment, FunctionComponent } from "react";

import { MetaTags } from "../../interfaces/metaTags";

type Props = {
  tags: MetaTags;
};

const Meta: FunctionComponent<Props> = ({ tags }) => {
  return (
    <Fragment>
      <meta name="description" key="description" content={tags.description} />

      {/* Begin OpenGraph Tag */}
      <meta property="og:type" key="og_type" content={tags.type} />
      {/* this meta tags helps Facebook and LinkedIn appropriately title the page when shared within its social network */}
      <meta property="og:title" key="og_title" content={tags.title} />
      {/* Helps facebook describe the page */}
      <meta
        property="og:description"
        key="og_description"
        content={tags.description}
      />
      {/* The URL of the main page */}
      <meta
        property="og:url"
        key="og_URL"
        content={tags.og_URL ? tags.og_URL : tags.canonical}
      />
      {/* A url of an image for Facebook to use in a preview. */}
      <meta
        property="og:image"
        key="og_image"
        content={tags.og_image ? tags.og_image : tags.image}
      />
      <meta
        property="og:site_name"
        key="og_site_name"
        content={tags.og_site_name ? tags.og_site_name : tags.title}
      />
      {/* End of OpenGraph Tag */}

      <meta name="robots" content={`${tags.robots}`} />
      <link rel="canonical" key="canonical" href={tags.canonical} />
    </Fragment>
  );
};

export default Meta;
