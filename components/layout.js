import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import navLinks from '../public/navLinks' assert {type: 'json'};

// const navLinks = [
// 	{title: "Home", path: "/", number:"one"},
// 	{title: "Projects", path: "/projects", number:"two"},
// 	{title: "Education", path: "/education", number:"three"},
// 	{title: "Blog", path: "/blog", number:"four"},
// 	{title: "Contact", path: "/contact", number:"five"},
// ]

export default function Layout({ children }){
    /* NB: the number of elements within the main-grid-container
    should match the number of values in grid-template-rows in the global css file*/
  return (
      <div className="main-grid-container">
        <Navbar navLinks={navLinks.navLinks}/>
        <main>
          {children}
        </main>
        <Footer />
      </div>
  );
}