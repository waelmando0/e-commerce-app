'use client';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const CartModal = () => {
	const cartItems = true;

	return (
		<div className='absolute p-4 rounded-md shadow-lg bg-white right-0 top-12 flex flex-col w-max'>
			{!cartItems ? (
				<div>Cart is Empty</div>
			) : (
				<div>
					<div className='flex gap-4'>
						<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
							<img
								src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
								alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
								className='h-full w-full object-cover object-center'
							/>
						</div>
						<div className='ml-4 flex flex-1 flex-col'>
							<div>
								<div className='flex justify-between text-base font-medium text-gray-900'>
									<h3>
										<a href='#'>Throwback Hip Bag</a>
									</h3>
									<p className='ml-4'>$90.00</p>
								</div>
								<p className='mt-1 text-sm text-gray-500'>Salmon</p>
							</div>
							<div className='flex flex-1 items-end justify-between text-sm'>
								<p className='text-gray-500'>Qty 1</p>

								<div className='flex'>
									<button
										type='button'
										className='font-medium text-indigo-600 hover:text-indigo-500'
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='border-t border-gray-200 px-4 py-6 sm:px-6 mt-8'>
						<div className='flex justify-between text-base font-medium text-gray-900'>
							<p>Subtotal</p>
							<p>$262.00</p>
						</div>
						<p className='mt-0.5 text-sm text-gray-500'>
							Shipping and taxes calculated at checkout.
						</p>
						<div className='mt-6'>
							<a
								href='#'
								className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
							>
								Checkout
							</a>
						</div>
						<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
							<p>
								or
								<button
									type='button'
									className='font-medium text-indigo-600 hover:text-indigo-500'
								>
									Continue Shopping
									<span aria-hidden='true'> &rarr;</span>
								</button>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartModal;
