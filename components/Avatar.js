import React from 'react';
import Image from 'next/image';

export default function Avatar() {
  return (
    <Image src="/images/my-pic.jpeg" alt="Picture of me" height='360' width='400' />
  );
}