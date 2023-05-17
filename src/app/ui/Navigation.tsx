'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLink {
	href: string;
	name: string;
}

interface Props {
	navLinks: NavLink[];
}

export function Navigation({ navLinks }: Props) {
	const pathname = usePathname();

	return (
		<>
			{navLinks.map((link) => {
				const isActive = pathname.startsWith(link.href);

				return (
					<Link
						className={isActive ? 'text-blue' : 'text-black'}
						href={link.href}
						key={link.name}>
						{link.name}
					</Link>
				);
			})}
		</>
	);
}
