"use client";

import { useEffect, useState } from "react";

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
			setShowColon((prev) => !prev);
		}, 500);

		return () => {
			clearInterval(timeInterval);
			clearInterval(colonInterval);
		};
	}, []);

	const isDaylightSaving = (date: Date) => {
		const year = date.getFullYear();
		// DST starts second Sunday in March
		const dstStart = new Date(year, 2, 1); // March 1st
		dstStart.setDate(dstStart.getDate() + (7 - dstStart.getDay()) + 7); // Second Sunday
		// DST ends first Sunday in November  
		const dstEnd = new Date(year, 10, 1); // November 1st
		dstEnd.setDate(dstEnd.getDate() + (7 - dstEnd.getDay())); // First Sunday
		
		return date >= dstStart && date < dstEnd;
	};

	const formatTime = () => {
		const isDST = isDaylightSaving(time);
		const offset = isDST ? 7 : 8; // PDT is UTC-7, PST is UTC-8
		const timezone = isDST ? "PDT" : "PST";
		
		// Convert to Pacific time
		const pacificTime = new Date(time.getTime() - offset * 60 * 60 * 1000);

		// Format time (12-hour format)
		const hours = pacificTime.getUTCHours();
		const minutes = pacificTime.getUTCMinutes().toString().padStart(2, "0");
		const ampm = hours >= 12 ? "PM" : "AM";
		const displayHours = hours % 12 || 12;

		// Format date
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const dayOfWeek = days[pacificTime.getUTCDay()];
		const month = months[pacificTime.getUTCMonth()];
		const day = pacificTime.getUTCDate();
		const year = pacificTime.getUTCFullYear();

		return {
			timeString: `${displayHours}${showColon ? ":" : " "}${minutes} ${ampm}`,
			dateString: `${dayOfWeek} ${month} ${day}, ${year} (${timezone})`,
			displayHours,
			ampm,
			dayOfWeek,
			minutes,
			timezone,
		};
	};

	const { timeString, dateString, displayHours, ampm, dayOfWeek, minutes, timezone } = formatTime();

	return (
		<div className="text-right">
			<span className="hidden min-[900px]:inline">{timeString}–{dateString}</span>
			<span className="hidden min-[480px]:inline min-[900px]:hidden">{dayOfWeek} {timeString} ({timezone})</span>
			<span className="min-[480px]:hidden">{displayHours}:{minutes.toString().padStart(2, "0")} {ampm} ({timezone})</span>
		</div>
	);
}
