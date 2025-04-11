import { useEffect, useState } from "react";

export function useDarkMode() {
	const [darkMode, setDarkMode] = useState(darkModeInitValue());

	function darkModeInitValue() {
		const jsonValue = window.localStorage.getItem("dark-mode");
		if (jsonValue != null) return JSON.parse(jsonValue);

		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		return prefersDarkMode;
	}

	useEffect(() => {
		darkMode
			? document.body.classList.add("dark")
			: document.body.classList.remove("dark");

		window.localStorage.setItem("dark-mode", JSON.stringify(darkMode));
	}, [darkMode]);

	return [darkMode, setDarkMode];
}
