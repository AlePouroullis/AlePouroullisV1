import React from 'react';
import Navbar from './navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }){
  const router = useRouter();
  
  return (
      <>
        <Navbar />
        <main>
          {children}
        </main>
        {(!(router.asPath === '/') && <Link href="/">
          <a>Back to home</a>
        </Link>)}
      </>
  );
}