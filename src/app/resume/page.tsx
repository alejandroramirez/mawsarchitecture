"use client";

import { useEffect, useState } from "react";

export default function ResumePage() {
	const [showScrollIndicator, setShowScrollIndicator] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const documentHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;
			const scrollableHeight = documentHeight - windowHeight;

			// Show indicator if there's content to scroll (more than 50px remaining)
			const hasMoreContent = scrollableHeight - scrollTop > 50;
			setShowScrollIndicator(hasMoreContent && scrollableHeight > 0);
		};

		// Check on mount and scroll
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return (
		<main>
			<div className="flex">
				<div className="max-w-[540px] space-y-6">
					<div>
						<p className="mb-2">04.2024—Current</p>
						<p className="mb-1 font-medium">Maws Architecture</p>
						<p>Architect, Founder</p>
					</div>

					<div>
						<p className="mb-2">04.2023-03.2024</p>
						<p className="mb-1 font-medium">HELEO Architecture and Design</p>
						<p className="mb-1">Project Architect</p>
						<p>
							Project Architect for various projects from Pre-schematic Design
							through Construction Administration
						</p>
					</div>

					<div>
						<p className="mb-2">10.2017—10.2021</p>
						<p className="mb-1 font-medium">LPA</p>
						<p className="mb-1">Design Coordinator II</p>
						<p>
							Design and BIM Project Coordinator for multiple DSA K-12
							educational projects from Pre-schematic Design through
							Construction Documents
						</p>
					</div>

					<div>
						<p className="mb-2">04.2014—09.2017</p>
						<p className="mb-1 font-medium">DLR Group</p>
						<p className="mb-1">Project Manager 03.2017—09.2017</p>
						<p className="mb-1">Job Captain 04.2014—03.2017</p>
						<p>
							Project Manager and BIM Project Manager for multiple DSA K–12
							educational projects from Pre-schematic Design through
							Construction Documents
						</p>
					</div>

					<div>
						<p className="mb-2">11.2010—03.2014</p>
						<p className="mb-1 font-medium">
							spf: architects Studio Pali Fekete
						</p>
						<p className="mb-1">Job Captain 09.2013 - 03.2014</p>
						<p className="mb-1">Intermediate Designer 11.2010 - 08.2013</p>
						<p>
							Job Captain for high end residential and multi-family projects
							from Schematic Design through Construction Administration
						</p>
					</div>

					<div>
						<p className="mb-2">08.2009—10.2010</p>
						<p className="mb-1 font-medium">mOrphosis architects</p>
						<p className="mb-1">Junior Designer 05.2010—10.2010</p>
						<p className="mb-1">Internship 08.2009—04.2010</p>
						<p>
							Junior Designer for multiple civic project from Schematic Design
							through Construction Documents
						</p>
					</div>

					<div>
						<p className="mb-2">04.2009—08.2009</p>
						<p className="mb-1 font-medium">Studio GPU</p>
						<p className="mb-1">Software Researcher</p>
						<p>Developing a software plug-in for Auto-desk Rhinoceros 4.0</p>
					</div>

					<div>
						<p className="mb-2">06.2008—09.2008</p>
						<p className="mb-1 font-medium">Shimoda Design Group</p>
						<p className="mb-1">Internship</p>
						<p>
							Internship Designer for multiple commercial projects from
							Schematic Design through Design Development
						</p>
					</div>
				</div>
			</div>

			{/* Dynamic scroll indicator */}
			<div
				className={`fixed bottom-6 right-6 lg:left-[564px] lg:right-auto text-lg transition-opacity duration-300 animate-bounce ${
					showScrollIndicator ? "opacity-60" : "opacity-0 pointer-events-none"
				}`}
			>
				↓
			</div>
			<div>
				<a
					href="/resume.pdf"
					download="Amaranta Morton Résumé 2025.pdf"
					className="mt-1 inline-block cursor-pointer transition-opacity hover:opacity-60"
				>
					→ Download
				</a>
			</div>
		</main>
	);
}
