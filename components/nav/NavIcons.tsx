'use client';

import { Bell, CircleUserRound, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CartModal from './CartModal';

const NavIcons = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const router = useRouter();

	// TEMPORARY
	const isLoggedIn = false;

	const handleProfile = () => {
		if (!isLoggedIn) {
			router.push('/login');
		}

		setIsProfileOpen((prev) => !prev);
	};

	return (
		<div className='flex items-center gap-4 relative'>
			<CircleUserRound
				className='text-slate-600 hover:text-slate-800 transition ease-in cursor-pointer'
				role='icon'
				aria-describedby='user'
				onClick={handleProfile}
			/>
			{isProfileOpen && (
				<div className='absolute p-4 rounded-md top-10 left-0 shadow-lg bg-white w-40'>
					<ul className='flex flex-col gap-1.5'>
						<Link href='/profile'>Profile</Link>
						<Link href='/logout'>Logout</Link>
					</ul>
				</div>
			)}
			<Bell
				className='text-slate-600 hover:text-slate-800 transition ease-in cursor-pointer'
				role='icon'
				aria-describedby='bell'
			/>
			<div className='relative'>
				<ShoppingCart
					className='text-slate-600 hover:text-slate-800 transition ease-in cursor-pointer'
					role='icon'
					aria-describedby='shopping cart'
					onClick={() => setIsCartOpen((prev) => !prev)}
				/>
				<div className='absolute -top-4 -right-4 h-6 w-6 bg-wamo rounded-full flex items-center justify-center text-white text-xs font-bold'>
					2
				</div>
			</div>
			{isCartOpen && <CartModal />}
		</div>
	);
};

export default NavIcons;
