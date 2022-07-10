import Image from 'next/image';
import propTypes from 'prop-types';

function Avatar() {
  return (
    <Image src="/images/me.jpeg" alt="Picture of me" height="370" width="400" />
  );
}

function Bio() {
  return (
    <div className="bio">
      <p className="bio-info">{`Hey. I'm Alé – a Computer Science and Applied Statistics student at the University of Cape Town.`}</p>
    </div>
  )
}

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <Avatar />
      <Bio />
    </div>
  )
}