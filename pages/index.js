import React from 'react';
import Layout from '../components/layout';
import Avatar from '../components/avatar';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Alé Pouroullis</title>
      </Head>
      <h1>Hello there</h1>
      <p>This is some message</p>
    </>
  );
}