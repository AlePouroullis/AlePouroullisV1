import React from 'react';
import Head from 'next/head';
import ProfileCard from '../components/home-page/profile-card';
import LongBio from '../components/home-page/long-bio';
import AboutWebsite from '../components/home-page/about-website';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Alé Pouroullis</title>
      </Head>
      <ProfileCard />
      <LongBio />
      <hr />
      <AboutWebsite />
    </>
  );
}