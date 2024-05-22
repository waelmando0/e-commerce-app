'use client';

import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

const Menu = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<AlignJustify
				className='w-8 h-8 cursor-pointer'
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10'>
					<Link href='/'>Home</Link>
					<Link href='/'>Shop</Link>
					<Link href='/'>Deals</Link>
					<Link href='/'>About</Link>
					<Link href='/'>Contact</Link>
					<Link href='/'>Logout</Link>
					<Link href='/'>Cart(1)</Link>
				</div>
			)}
		</nav>
	);
};

export default Menu;
