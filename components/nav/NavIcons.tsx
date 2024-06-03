'use client';

import { Bell, CircleUserRound, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

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
				className='text-gray-500 cursor-pointer'
				role='icon'
				aria-describedby='user'
				onClick={handleProfile}
			/>
			{isProfileOpen && (
				<div className='absolute p-4 rounded-md top-10 left-0 shadow-lg bg-white w-40'>
					<ul className='flex flex-col gap-1.5'>
						<Link href='/' className='text-red-600 cursor-pointer'>
							Profile
						</Link>
						<Link href='/' className='text-red-600'>
							Logout
						</Link>
					</ul>
				</div>
			)}
			<Bell
				className='text-gray-500 cursor-pointer'
				role='icon'
				aria-describedby='bell'
			/>
			<ShoppingCart
				className='text-gray-500 cursor-pointer'
				role='icon'
				aria-describedby='shopping cart'
			/>
		</div>
	);
};

export default NavIcons;
