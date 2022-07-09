import React from 'react';
import NavLink from './navlink';


function Logo({ children }) {
	return <h1 className="logo">{children}</h1>
}

export default function Navbar({ navLinks }){
	return (
		<nav className="navbar">
			<Logo>Alé Pouroullis</Logo>
			<ul className="nav-list">
				{navLinks.map(link => 
					<NavLink key={link.title} exact href={link.path} className="nav-link">
						{link.title}
					</NavLink>
				)}
			</ul>
		</nav>
	);
}