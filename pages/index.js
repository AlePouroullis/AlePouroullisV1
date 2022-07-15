import React from 'react';
import Head from 'next/head';
import ProfileCard from '../components/home-page/profile-card';
import LongBio from '../components/home-page/long-bio';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Alé Pouroullis</title>
      </Head>
      <ProfileCard />
      <LongBio />
    </>
  );
}