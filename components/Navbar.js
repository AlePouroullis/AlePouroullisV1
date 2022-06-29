import React from 'react';
import Link from 'next/link';

export default function Navbar(){
	return (
		<>
			<div id="navbar">
				<h1>Navbar</h1>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
				{' '}
				<Link href="/education">
					<a>Education</a>
				</Link>
			</div>
		</>
	);
}