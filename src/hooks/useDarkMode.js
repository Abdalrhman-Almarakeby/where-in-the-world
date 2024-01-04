import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const jsonValue = window.localStorage.getItem("dark-mode");
    if (jsonValue != null) return JSON.parse(jsonValue);

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    window.localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
