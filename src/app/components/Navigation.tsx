"use client";

import Image from "next/image";
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
			<div className="mb-2 flex items-start justify-between">
				<h1 className="mr-4 font-normal">
					<Link href="/">
						<span className="sm:hidden">
							MAWS
							<br />
							Architecture
						</span>
						<span className="hidden sm:inline">MAWS Architecture</span>
					</Link>
				</h1>
				<div className="flex min-w-0 flex-1 justify-center">
					<Image
						src="/maws-logo.png"
						alt="MAWS Architecture"
						className="h-6 w-auto flex-shrink-0"
						width={140}
						height={107}
					/>
				</div>
				<div className="ml-4">
					<PDTClock />
				</div>
			</div>
			<div className="flex gap-6">
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={
							pathname === item.href
								? "underline decoration-1 underline-offset-4 opacity-100"
								: "opacity-60 hover:underline hover:decoration-1 hover:underline-offset-4 hover:opacity-80"
						}
					>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
