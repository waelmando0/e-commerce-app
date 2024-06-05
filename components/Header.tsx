import Link from 'next/link';
import React from 'react';
import Menu from './nav/Menu';
import SearchBar from './nav/SearchBar';
import NavIcons from './nav/NavIcons';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
	return (
		<header>
			<div className='max-w-7xl mx-auto px-8 relative'>
				<div className='py-8'>
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

						<ul className='hidden xl:flex gap-4 transition-colors'>
							<li>
								<Link href='/' className='text-slate-600 hover:text-black'>
									Homepage
								</Link>
							</li>
							<li>
								<Link href='/' className='text-slate-600 hover:text-black'>
									Shop
								</Link>
							</li>
							<li>
								<Link href='/' className='text-slate-600 hover:text-black'>
									Deals
								</Link>
							</li>
							<li>
								<Link href='/' className='text-slate-600 hover:text-black'>
									About
								</Link>
							</li>
							<li>
								<Link href='/' className='text-slate-600 hover:text-black'>
									Contact
								</Link>
							</li>
						</ul>

						{/* RIGHT */}
						<div className='w-2/3 flex items-center justify-between gap-8'>
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
