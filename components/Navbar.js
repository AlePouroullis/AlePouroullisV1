import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Logo({ children }) {
	return <h1 className="logo">{children}</h1>
}

export default function Navbar({ navLinks, activeLinkIndex }){
	const router = useRouter(); 

	// Divides the total width (as percentage) of the nav-link list by the number of nav
  // links so that the width of the underline spans a single link.
	const underlineWidth = 100 / navLinks.length;

	// underlinePos stores the position of the link for the underline
	// to be placed under, which is used to determine where the margin-left
	// should be placed. The default position is under the active link. 
	const [underlinePos, setUnderlinePos] = useState(activeLinkIndex);	

	function handleOnMouseEnter(e, index) {
		setUnderlinePos(index);
	}

	function handleOnMouseLeave(e) {
		setUnderlinePos(activeLinkIndex);
	}
	
	const linkUnderlineMarginLeft = (underlinePos * underlineWidth).toString();
	const linkUnderlineStyle = {marginLeft: linkUnderlineMarginLeft + '%'};

	return (
		<nav className="navbar">
			<Logo>Logo</Logo>
			<ul className="nav-list">
				{navLinks.map((link, index) => {
					// className = "nav-link <number> [active] 
				  // active class is present if the link is active.
					// The number is used for the underline."
					let className = "nav-link " + (router.pathname === link.path ? " active" : "");
					return (
						<li 
						key={link.title} 
						className="nav-item "
						onMouseEnter={(e) => handleOnMouseEnter(e, index)}
						onMouseLeave={handleOnMouseLeave}>
							<Link href={link.path}>
								<a className={className}>
									{link.title}
								</a>
							</Link>
						</li>
					)}
				)}
				<hr className="nav-slide" style={linkUnderlineStyle}/>
			</ul>
		</nav>
	);
}