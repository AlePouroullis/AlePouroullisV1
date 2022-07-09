import React from 'react';
import NavLink from './navlink';
import Burger from './burger';
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

function Logo({ children }) {
	return <h1 className="logo">
		<Link href="/">
			<a className="logo-link" href="">{children}</a>
		</Link>
	</h1>
}

export default function Navbar({ navLinks }){
	const [isShowNavList, setIsShowNavList] = useState(false);

	const toggleIsShowNavList = () => setIsShowNavList(!isShowNavList);

	const navListClassNames = classNames("nav-list", {"show": isShowNavList});

	return (
		<nav className="navbar">
			<Logo>Alé Pouroullis</Logo>
			<ul className={navListClassNames}>
				{navLinks.map(link => 
					<NavLink key={link.title} exact href={link.path} className="nav-link">
						{link.title}
					</NavLink>
				)}
			</ul>
			<Burger toggleIsShowNavList={toggleIsShowNavList}/>
		</nav>
	);
}