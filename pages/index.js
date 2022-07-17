import React from 'react';
import Head from 'next/head';
import ProfileCard from '../components/home-page/profile-card';
import LongBio from '../components/home-page/long-bio';

export default function HomePage() {
  const animationDelayDuration = {
    avatar: "0s",
    shortBio: ".5s",
    longBio: "1s"
  }
  const floatIn = true;

  return (
    <>
      <Head>
        <title>Home | Alé Pouroullis</title>
      </Head>
      <ProfileCard 
      avatarAnimationDelayDuration={animationDelayDuration.avatar}
      shortBioAnimationDelayDuration={animationDelayDuration.shortBio}
      floatIn={floatIn}
     />
      <LongBio animationDelayDuration={animationDelayDuration.longBio}
        floatIn={floatIn}
      />
    </>
  );
}