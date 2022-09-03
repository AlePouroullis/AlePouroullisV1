import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';


import { getHref, getNavigationLink } from '../../core/api/helper';

// import './styles.css';

type Props = { 
   info: { id: string, title: string, description: string, publishedAt: Date, slug: string};
}

const BlogPostLink: FunctionComponent<Props> = ({ info }) => {
   const [datePublished, setDatePublished] = useState('');
   // let date = new Date(info.publishedAt);
   // const formattedDate = date.toLocaleString();
   useEffect(() => {
      const date = new Date(info.publishedAt);
      setDatePublished(date.toLocaleDateString());
   }, [datePublished]);
   console.log(getHref(info.slug));
   return (
      <div className="blog-post-link">
         <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
            <a className="action">
               <h3 className="heading">{info.title}</h3>
               <p className="description">{info.description}</p>
               <p>{datePublished}</p>
            </a>
         </Link>

      </div>
   )
}

export default BlogPostLink;