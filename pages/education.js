import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <>
      <Layout>
        <h1>Education page</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Layout>
    </>
  );
}