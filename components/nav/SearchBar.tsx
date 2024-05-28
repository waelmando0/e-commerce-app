'use client';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
	return (
		<form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'>
			<input
				type='text'
				placeholder='Search'
				className='flex-1 bg-transparent outline-none'
			/>
			<button className='cursor-pointer'>
				<SearchIcon />
			</button>
		</form>
	);
};

export default SearchBar;
