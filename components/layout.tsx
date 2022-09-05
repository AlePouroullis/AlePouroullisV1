import React, { Fragment, FunctionComponent, ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import navLinks from '../public/navLinks.js';
import Meta from './meta/meta';
import { MetaTags } from '../interfaces/tag';
import Head from 'next/head';

type Props = {
  metaTags: MetaTags;
  children: ReactNode;
  title: string;
  pageName: string;
}

const Layout: FunctionComponent<Props> = ({ metaTags, children, title, pageName }) => {
    /* NB: the number of elements within the main-grid-container
    should match the number of values in grid-template-rows in the global css file*/
  return (
      <Fragment>
        <Head>
          <Meta tags={metaTags}/>
          <title>{title}</title>
        </Head>
        <div className="main-grid-container">
          <Navbar navLinks={navLinks}/>
          <main>
            <div className={`${pageName}-page`}>{children}</div>
          </main>
          <Footer />
        </div>
      </Fragment>
  );
}

export default Layout;