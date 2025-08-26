"use client";

import { useEffect } from "react";

const colors = [
	"#f3f1d9", // Crema
	"#24e4a6", // Turquesa
	"#fff115", // Amarillo
	"#ffb6c1", // Rosa claro
	"#ff002a", // Rojo
	"#ff8c0f", // Naranja
	"#a940c2", // Púrpura
];

// Calculate luminance of a color to determine if text should be black or white
function getTextColorForBackground(hexColor: string): string {
	// Remove the # if present
	const hex = hexColor.replace("#", "");

	// Parse RGB values
	const r = Number.parseInt(hex.substr(0, 2), 16);
	const g = Number.parseInt(hex.substr(2, 2), 16);
	const b = Number.parseInt(hex.substr(4, 2), 16);

	// Calculate relative luminance using WCAG formula
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	// Return black for light backgrounds, white for dark backgrounds
	return luminance > 0.5 ? "#000000" : "#ffffff";
}

export default function MouseBackground() {
	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			const { innerWidth, innerHeight } = window;

			// Calculate grid position (4 columns x 3 rows = 12 colors)
			const cols = 4;
			const rows = 3;

			const colWidth = innerWidth / cols;
			const rowHeight = innerHeight / rows;

			const col = Math.floor(clientX / colWidth);
			const row = Math.floor(clientY / rowHeight);

			// Ensure we stay within bounds
			const clampedCol = Math.min(col, cols - 1);
			const clampedRow = Math.min(row, rows - 1);

			// Calculate color index
			const colorIndex = clampedRow * cols + clampedCol;
			const backgroundColor = colors[colorIndex] ?? "#ffffff";
			const textColor = getTextColorForBackground(backgroundColor);

			// Apply background and text color to body
			document.body.style.backgroundColor = backgroundColor;
			// document.body.style.color = textColor;
		};

		// Add event listener
		document.addEventListener("mousemove", handleMouseMove);

		// Cleanup
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return null; // This component doesn't render anything visible
}
