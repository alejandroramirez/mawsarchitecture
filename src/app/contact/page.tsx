import Image from "next/image";

export default function ContactPage() {
	return (
		<main className="flex h-[calc(100dvh-130px)] flex-col justify-between">
			<div className="space-y-1">
				<p>Amaranta Morton</p>
				<p>
					<a
						href="mailto:amaranta@mawsarchitecture.com"
						className="hover:opacity-60"
					>
						amaranta@mawsarchitecture.com
					</a>
				</p>
				<p>
					<a href="tel:+13106910409" className="hover:opacity-60">
						t + 1 310 691 0409
					</a>
				</p>
				<p>
					<a
						href="https://www.instagram.com/maws_architecture/"
						target="_blank"
						className="hover:opacity-60"
						rel="noreferrer"
					>
						Follow: Instragram
					</a>
				</p>
			</div>

			{/* Footer row pinned to bottom */}
			<div className="flex items-end">
				<p className="text-sm leading-2.5">©2025</p>
			</div>
		</main>
	);
}
