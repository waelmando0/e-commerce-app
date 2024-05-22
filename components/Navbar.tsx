import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
	return (
		<header>
			<div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
				{/* Mobile */}
				<div className='md:hidden h-full flex items-center justify-between'>
					<Link href='/'>
						<div className='text-2xl tracking-wide uppercase'>wamo</div>
					</Link>
					<Menu />
				</div>

				{/* BIGGER SCREENS */}
				<div className='hidden md:flex items-center justify-between gap-8 h-full'>
					{/* LEFT */}
					<div className='w-1/3'>
						<Link href='/' className='flex items-center gap-3'>
							<ShoppingCart />
							<div className='text-2xl tracking-wide uppercase'>wamo</div>
						</Link>
					</div>

					{/* RIGHT */}
					<div className='w-2/3'>
						<SearchBar />
						<NavIcons />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
