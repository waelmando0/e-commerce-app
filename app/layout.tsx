import type { Metadata } from 'next';
import './globals.css';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [
		{
			name: 'wamo ',
			url: 'https://twitter.com/waelmando0',
		},
	],
	creator: 'waelmando',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn(fontSans.variable)}>
				<div className='flex flex-col min-h-screen overflow-hidden'>
					<Header />
					<main className='flex-grow'>
						<>{children}</>
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
