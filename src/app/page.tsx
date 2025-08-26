"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<main className="max-w-[540px]">
				<div className="grid grid-cols-1 items-start gap-1">
					<div className="">
						<p className="mb-4">
							A licensed architect in California, Amaranta Morton is the founder
							of MAWS Architecture, established in 2024. Based in Orange County,
							her firm offers a full spectrum of architectural services tailored
							to meet your unique needs, from conceptualization to construction
							documentation and administration. Additionally, her firm provides
							design development and permitting assistance. With over 17 years
							of experience across diverse project typologies, she excels in
							guiding projects from initial design phases through to completion,
							ensuring excellence in every client engagement.
						</p>

						{!isExpanded && (
							<button
								type="button"
								onClick={() => setIsExpanded(true)}
								className="cursor-pointer transition-opacity hover:opacity-60"
							>
								→ Read more
							</button>
						)}

						<div
							className={`overflow-hidden transition-all duration-500 ease-in-out ${
								isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
							}`}
						>
							<div className="space-y-4">
								<p>
									Amaranta holds a Bachelor's of Architecture from the Southern
									California Institute of Architecture. Her extensive background
									includes commercial, civic, educational, institutional, and
									residential projects. On every project, she has played a
									pivotal role from early planning stages through final
									construction, leveraging her skills in communication,
									organization, interdisciplinary collaboration, and Building
									Information Modeling (BIM) to lead project teams through all
									project phases.
								</p>

								<p>
									Before founding MAWS Architecture, Amaranta honed her
									expertise at renowned firms such as HELEO Architecture &
									Design in San Diego, LPA Design Studios in Irvine, DLR Group
									in Los Angeles, SPF Architects, and Morphosis Architects in
									Culver City.
								</p>
							</div>
						</div>
					</div>

					<div className="flex">
						<div className="w-full">
							<Image
								src="/architect-profile.png"
								alt="Amaranta Morton"
								className="h-auto w-full"
								width={1331}
								height={887}
								priority
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
