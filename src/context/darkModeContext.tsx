"use client";
import { createContext, ReactNode, useState, useContext, useEffect, useLayoutEffect } from "react";

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
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useLayoutEffect(() => {
		const userPrefersDark =
			window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
		setDarkMode(userPrefersDark);
	}, []);

	useLayoutEffect(() => {
		if (darkMode) {
			document.querySelector("body")?.setAttribute("data-theme", "dark");
		} else {
			document.querySelector("body")?.setAttribute("data-theme", "light");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
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
