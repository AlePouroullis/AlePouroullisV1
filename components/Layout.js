import React from 'react';
import Navbar from './navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
	{title: "Home", path: "/", number:"one"},
	{title: "Projects", path: "/projects", number:"two"},
	{title: "Education", path: "/education", number:"three"},
	{title: "Blog", path: "/blog", number:"four"},
	{title: "Contact", path: "/contact", number:"five"},
]

export default function Layout({ children }){
  const router = useRouter();
  const activeLinkIndex = navLinks.findIndex(link => link.path === router.pathname);
  console.log(activeLinkIndex);
  
  return (
      <>
        {/* activeLinkIndex is passed as key to force re-render when activeLinkIndex changes. */}
        <Navbar key={activeLinkIndex} navLinks={navLinks} activeLinkIndex={activeLinkIndex}/>
        <main>
          {children}
        </main>
        {(!(router.asPath === '/') && <Link href="/">
          <a>Back to home</a>
        </Link>)}
      </>
  );
}