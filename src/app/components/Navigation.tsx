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
			<div className="mb-2 grid grid-cols-3 items-start">
				<div className="flex justify-start">
					<h1 className="font-normal">
						<Link href="/">
							<span className="sm:hidden">
								MAWS
								<br />
								Architecture
							</span>
							<span className="hidden sm:inline">MAWS Architecture</span>
						</Link>
					</h1>
				</div>
				<div className="flex justify-center">
					<Image
						src="/maws-logo.png"
						alt="MAWS Architecture"
						className="h-6 w-auto flex-shrink-0"
						width={140}
						height={107}
					/>
				</div>
				<div className="flex justify-end">
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
