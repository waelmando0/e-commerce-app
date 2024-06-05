'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MenuLink {
	route: string;
	label: string;
	active: React.ReactNode;
}

const Menu = () => {
	const pathname = usePathname();

	const links: MenuLink[] = [
		{ route: '/', label: 'Home', active: pathname === `/` },
		{ route: '/shop', label: 'Shop', active: pathname === `/shop` },
		{ route: '/deals', label: 'Deals', active: pathname === `/deals` },
		{ route: '/about', label: 'About', active: pathname === `/about` },
		{ route: '/contact', label: 'Contact', active: pathname === `/contact` },
		{ route: '/logout', label: 'Logout', active: pathname === `/logout` },
	];

	const [open, setOpen] = useState(false);

	return (
		<nav onClick={() => setOpen(!open)} className='flex'>
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
				<div>
					<ul className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10 px-6'>
						{links.map((item) => (
							<li key={item.route}>
								<Link
									href={item.route}
									className={cn(
										'text-xl font-medium transition-colors ease-in-out',
										item.active
											? 'text-white '
											: 'text-white/60 hover:text-white'
									)}
								>
									<span>{item.label} </span>
								</Link>
							</li>
						))}
						<Link href='/' className='text-xl font-medium text-wamo'>
							Cart(1)
						</Link>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Menu;
