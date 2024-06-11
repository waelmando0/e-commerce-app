/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Button } from '../ui/button';

const CartModal = () => {
	const cartItems = true;

	return (
		<div className='absolute p-4 rounded-md shadow-lg bg-white right-0 top-12 flex flex-col w-max'>
			{!cartItems ? (
				<div>Cart is Empty</div>
			) : (
				<div className='space-y-6'>
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
								<div className='flex justify-between text-base font-semibold text-gray-900'>
									<h3>Throwback Hip Bag</h3>
									<p className='ml-4'>$90.00</p>
								</div>
								<p className='mt-1 text-sm text-gray-500'>available</p>
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
					<div className='flex gap-4'>
						<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
							<img
								src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
								alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
								className='h-full w-full object-cover object-center'
							/>
						</div>
						<div className='ml-4 flex flex-1 flex-col'>
							<div>
								<div className='flex justify-between text-base font-semibold text-gray-900'>
									<h3>Throwback Hip Bag</h3>
									<p className='ml-4'>$90.00</p>
								</div>
								<p className='mt-1 text-sm text-gray-500'>available</p>
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
					<div className='border-t border-gray-200 py-4'>
						<div className='flex justify-between text-base font-bold text-gray-900'>
							<p>Subtotal</p>
							<p>$262.00</p>
						</div>
						<p className='mt-0.5 text-sm text-gray-500'>
							Shipping and taxes calculated at checkout.
						</p>
						<div className='mt-4 flex justify-between'>
							<Button variant='outline'>View Cart</Button>
							<Button>Checkout</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartModal;
