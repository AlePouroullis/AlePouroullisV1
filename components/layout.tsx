import React, { Fragment, FunctionComponent, ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import navLinks from '../public/navLinks.js';
import Meta from './meta';
import { MetaTags } from '../interfaces/tag';
import Head from 'next/head';

type Props = {
  metaTags: MetaTags;
  children: ReactNode;
  title: string;
}

const Layout: FunctionComponent<Props> = ({ metaTags, children, title }) => {
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
            {children}
          </main>
          <Footer />
        </div>
      </Fragment>
  );
}

export default Layout;