import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Next.js',
};
const HomePage = () => {
	return (
		<div>
			<h1>Hello,Home Page</h1>
			<Link href='/dashboard'>Dashboard</Link>
		</div>
	);
};

export default HomePage;
