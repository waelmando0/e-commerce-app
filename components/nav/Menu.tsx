'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav onClick={() => setOpen(!open)}>
			<button className={open ? 'l active z-30' : 'l'} aria-label='Toggle menu'>
				<span className='y'>Menu</span>
				<svg
					className='w-6 h-6 text-primary500 fill-current '
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect y='4' width='24' height='2'></rect>
					<rect y='11' width='24' height='2'></rect>
					<rect y='18' width='24' height='2'></rect>
				</svg>
			</button>
			{open && (
				<nav>
					<ul className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10'>
						<Link href='/'>Home</Link>
						<Link href='/'>Shop</Link>
						<Link href='/'>Deals</Link>
						<Link href='/'>About</Link>
						<Link href='/'>Contact</Link>
						<Link href='/'>Logout</Link>
						<Link href='/'>Cart(1)</Link>
					</ul>
				</nav>
			)}
		</nav>
	);
};

export default Menu;
