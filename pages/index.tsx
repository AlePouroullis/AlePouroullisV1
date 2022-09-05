import React, { FunctionComponent } from 'react';
import ProfileCard from '../components/homePage/profileCard';
import LongBio from '../components/homePage/longBio';
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
      <Layout pageName="home" metaTags={defaultMetaTags} title="Home | Alé Pouroullis">
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