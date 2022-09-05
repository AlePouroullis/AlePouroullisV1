import React from 'react';
import NavLink from './navlink';
import Burger from './burger';
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';


function Logo({ children }) {
	return <div className="logo">
		<Link href="/">
			<a className="logo-link" href="">{children}</a>
		</Link>
	</div>
}

export default function Navbar({ navLinks }){
	const [isShowNavList, setIsShowNavList] = useState(false);

	const toggleIsShowNavList = () => setIsShowNavList(!isShowNavList);

	const navListClassNames = classNames("nav-list");

	return (
		<nav className="navbar">
			<Logo><h1>Alé Pouroullis</h1></Logo>
			<Burger isShowNavList={isShowNavList} toggleIsShowNavList={toggleIsShowNavList}/>
			<ul className={navListClassNames}>
				{navLinks.map((link, index) => {
					/* order will be used to stagger the animation
					  of link content when in mobile view. It will be 
						stored as an inline style variable in the <li> tags.*/
					const order = index+1;

					return (
					<NavLink onClick={toggleIsShowNavList} key={link.title} style={{"--order": order}} exact href={link.path} className="nav-link">
						{link.title}
					</NavLink>)
				}
				)}
			</ul>

		</nav>
	);
}