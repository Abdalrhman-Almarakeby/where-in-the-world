import { useEffect, useState } from "react";

/**
 * Custom hook to manage dark mode state.
 *
 * @returns {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} - An array containing the dark mode state and a function to toggle it.
 */
export function useDarkMode() {
	/**
	 * Determines the initial dark mode value.
	 *
	 * @returns {boolean} - The initial dark mode state.
	 */
	function darkModeInitialValue() {
		const savedDarkModePreference = window.localStorage.getItem("dark-mode");
		if (
			savedDarkModePreference === "true" ||
			savedDarkModePreference === "false"
		) {
			return JSON.parse(savedDarkModePreference);
		}

		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		return prefersDarkMode;
	}

	const [darkMode, setDarkMode] = useState(darkModeInitialValue());

	useEffect(() => {
		darkMode
			? document.body.classList.add("dark")
			: document.body.classList.remove("dark");

		window.localStorage.setItem("dark-mode", JSON.stringify(darkMode));
	}, [darkMode]);

	return [darkMode, setDarkMode];
}
