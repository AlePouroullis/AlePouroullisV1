import React from 'react';
import Head from 'next/head';
import ProfileCard from '../components/profile-card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Alé Pouroullis</title>
      </Head>
      <ProfileCard />
    </>
  );
}