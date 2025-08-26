import "~/styles/globals.css";

import type { Metadata } from "next";
import MouseBackground from "./components/MouseBackground";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
	title: "MAWS Architecture",
	description:
		"Licensed architect in California, Amaranta Morton is the founder of MAWS Architecture",
	icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className="bg-white">
				<MouseBackground />
				<div className="p-6">
					<Navigation />
					{children}
				</div>
			</body>
		</html>
	);
}
