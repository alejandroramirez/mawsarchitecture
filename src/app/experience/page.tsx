export default function ExperiencePage() {
	const projects = [
		"https://www.heleo.co/sessions-by-the-bay",
		"https://www.heleo.co/izola-bakery",
		"https://www.spfa.com/work/double-stick",
		"https://www.spfa.com/work/wallis-annenberg-center-for-the-performing-arts",
		"https://lpadesignstudios.com/projects/roosevelt-high-school",
		"https://www.dlrgroup.com/work/beverly-hills-high-school",
		"https://www.morphosis.com/architecture/125/?m=project",
		"https://www.morphosis.com/architecture/127/?m=project",
	];

	return (
		<main>
			<div className="space-y-4">
				<p className="max-w-[540px]">
					Amaranta Morton has contributed to projects at different firms,
					providing design and architectural support.
				</p>

				<div className="space-y-1">
					{projects.map((url, index) => (
						<div key={url}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="relative inline-block hover:opacity-60 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
							>
								{url}
							</a>
						</div>
					))}
				</div>

				<div className="mt-6">
					<p>→ All projects remain the property of their respective firms.</p>
				</div>
			</div>
		</main>
	);
}
