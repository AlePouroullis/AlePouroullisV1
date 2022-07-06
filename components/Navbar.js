import React from 'react';
import Link from 'next/link';

function NavLink({ children, to }) {
	return (
		<Link href={to}>
			<a className="nav-link">{children}</a>
		</Link>
	);
}

function NavItem({ children, to }) {
	return (
		<li className="nav-item">
		 <NavLink to={to}>{children}</NavLink>
		</li>
	)
}

function NavList({ navList }) {
	const navListItems = Object.keys(navList).map((key, index) => {
		return (
			<NavItem key={navList[key].id} to={navList[key].to}>
				{key}
			</NavItem>
		);
	})
	return (
		<ul className="nav-list">
			{navListItems}
		</ul>
	);
}

export default function Navbar(){
	const navList = {Home: {to: "/",
													id: 0}, 
									Projects: {to: "/projects",
														id: 1 },
								  Education: {to: "/education",
														 id: 2},
									Blog: {to: "/blog/",
												 id: 3},
								  Contact: {to: "/contact",
								           id: 4}
	}

	function Logo({ children }) {
		return <h1 className="logo">{children}</h1>
	}

	return (
		<>
			<nav className="navbar">
				<Logo>Logo</Logo>
				<NavList navList={navList} />
			</nav>
		</>
	);
}