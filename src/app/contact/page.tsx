import Image from "next/image";

export default function ContactPage() {
	return (
		<main className="flex min-h-dvh flex-col">
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
			</div>

			{/* Footer row pinned to bottom, side-by-side */}
			<div className="mt-auto flex items-center justify-between pt-6">
				<Image
					src="/maws-logo.png"
					alt="MAWS Architecture"
					width={160}
					height={107}
				/>
				<p className="text-sm">©2025</p>
			</div>
		</main>
	);
}
