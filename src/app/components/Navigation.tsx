"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PDTClock from "./PDTClock";

export default function Navigation() {
	const pathname = usePathname();

	const navItems = [
		{ href: "/", label: "About" },
		{ href: "/experience", label: "Experience" },
		{ href: "/resume", label: "Résumé" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="mb-4">
			<div className="mb-4 flex items-center justify-between">
				<h1 className="font-normal">
					<Link href="/">MAWS Architecture</Link>
				</h1>
				<PDTClock />
			</div>
			<div className="flex gap-6">
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={
							pathname === item.href
								? "opacity-100 underline decoration-1 underline-offset-4"
								: "opacity-60 hover:opacity-80 hover:underline hover:decoration-1 hover:underline-offset-4"
						}
					>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
