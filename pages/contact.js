import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export default function ContactPage() {
  return (
    <>
      <Layout>
        <h1>Contact page</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Layout>
    </>
  );
}