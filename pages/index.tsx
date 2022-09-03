import React, { FunctionComponent } from 'react';
import ProfileCard from '../components/home-page/profile-card';
import LongBio from '../components/home-page/long-bio';
import Layout from '../components/layout';
import { MetaTags } from '../interfaces/tag';
import { defaultMetaTags } from '../core/constants';


const HomePage: FunctionComponent = () => {
  const animationDelayDuration = {
    avatar: "0s",
    shortBio: ".5s",
    longBio: "1s"
  }
  const floatIn = true;

  return (
    <>
      <Layout metaTags={defaultMetaTags} title="Home | Alé Pouroullis">
        <ProfileCard
        avatarAnimationDelayDuration={animationDelayDuration.avatar}
        shortBioAnimationDelayDuration={animationDelayDuration.shortBio}
        floatIn={floatIn}
             />
        <LongBio animationDelayDuration={animationDelayDuration.longBio}
          floatIn={floatIn}
        />
      </Layout>
    </>
  );
};

export default HomePage;