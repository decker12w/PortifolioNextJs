"use client";

import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import Style from "./DarkMode.module.css";
import { useDarkMode } from "../../context/darkModeContext";

interface props {
	className?: string;
}

export default function DarkMode({ className }: props) {
	const { darkMode, toggleDarkMode } = useDarkMode();
	return (
		<>
			{darkMode ? (
				<CiLight
					onClick={toggleDarkMode}
					className={`${Style.light} ${Style.icon} ${className}`}
				/>
			) : (
				<CiDark
					onClick={toggleDarkMode}
					className={`${Style.dark} ${Style.icon} ${className}`}
				/>
			)}
		</>
	);
}
