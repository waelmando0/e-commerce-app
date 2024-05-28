import Link from 'next/link';
import React from 'react';
import Menu from './nav/Menu';
import SearchBar from './nav/SearchBar';
import NavIcons from './nav/NavIcons';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
	return (
		<header>
			<div className='max-w-7xl mx-auto px-5 lg:px-6 relative'>
				<div className='py-4'>
					{/* Mobile */}
					<div className='md:hidden flex items-center justify-between'>
						<Link href='/'>
							<div className='text-2xl tracking-wide uppercase'>wamo</div>
						</Link>
						<Menu />
					</div>

					{/* BIGGER SCREENS */}
					<div className='hidden md:flex items-center justify-between gap-8'>
						{/* LEFT */}

						<Link href='/' className='flex items-center gap-3'>
							<ShoppingCart />
							<div className='text-2xl tracking-wide uppercase'>wamo</div>
						</Link>

						{/* RIGHT */}
						<div className='w-2/3 flex items-center justify-between gap-3'>
							<SearchBar />
							<NavIcons />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
