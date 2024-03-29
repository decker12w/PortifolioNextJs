"use client";
import { CiDark } from "react-icons/ci";
import Style from "./DarkMode.module.css";

interface props {
	className?: string;
}

export default function DarkMode({ className }: props) {
	const setDarkMode = () => {
		document.querySelector("body")?.setAttribute("data-theme", "dark");
	};
	const setLightMode = () => {
		document.querySelector("body")?.setAttribute("data-theme", "light");
	};

	const toggleDarkMode = () => {
		if (document.querySelector("body")?.getAttribute("data-theme") === "dark") {
			setLightMode();
		} else {
			setDarkMode();
		}
	};
	return <CiDark onClick={toggleDarkMode} className={`{${Style.icon}} ${className}`} />;
}
