"use client";

import { useState, useEffect } from "react";

export default function PDTClock() {
	const [time, setTime] = useState(new Date());
	const [showColon, setShowColon] = useState(true);

	useEffect(() => {
		// Update time every second
		const timeInterval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// Blink colon every 500ms
		const colonInterval = setInterval(() => {
			setShowColon(prev => !prev);
		}, 500);

		return () => {
			clearInterval(timeInterval);
			clearInterval(colonInterval);
		};
	}, []);

	const formatTime = () => {
		// Convert to PDT (UTC-7)
		const pdtTime = new Date(time.getTime() - (7 * 60 * 60 * 1000));
		
		// Format time (12-hour format)
		const hours = pdtTime.getUTCHours();
		const minutes = pdtTime.getUTCMinutes().toString().padStart(2, '0');
		const ampm = hours >= 12 ? 'PM' : 'AM';
		const displayHours = hours % 12 || 12;

		// Format date
		const months = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];
		const month = months[pdtTime.getUTCMonth()];
		const day = pdtTime.getUTCDate();
		const year = pdtTime.getUTCFullYear();

		return {
			timeString: `${displayHours}${showColon ? ':' : ' '}${minutes} ${ampm}`,
			dateString: `${month} ${day}, ${year} (PDT)`
		};
	};

	const { timeString, dateString } = formatTime();

	return (
		<div className="text-right">
			{timeString}–{dateString}
		</div>
	);
}