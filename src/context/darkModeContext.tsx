"use client";
import { createContext, ReactNode, useState, useContext } from "react";

interface DarkModeContextData {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
	toggleDarkMode: () => void;
}

export const DarkModeContext = createContext({} as DarkModeContextData);

interface DarkModeProviderProps {
	children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		if (darkMode) {
			document.querySelector("body")?.setAttribute("data-theme", "light");
		} else {
			document.querySelector("body")?.setAttribute("data-theme", "dark");
		}
		setDarkMode(!darkMode);
	};

	const contextValue = {
		darkMode,
		setDarkMode,
		toggleDarkMode
	};

	return (
		<DarkModeContext.Provider value={contextValue}>
			<>{children}</>
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => useContext(DarkModeContext);
