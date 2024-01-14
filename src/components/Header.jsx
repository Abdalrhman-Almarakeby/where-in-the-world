import { Link } from "react-router-dom";
import MoonIcon from "../assets/icons/moon.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const [enabled, setDarkMode] = useDarkMode();

  return (
    <header className="z-50 bg-white text-veryDarkBlue shadow-md dark:bg-blue dark:text-white">
      <div className="container flex items-center justify-between px-6 py-7">
        <Link
          to="/"
          className="rounded font-extrabold outline-offset-8 focus-visible:outline focus-visible:outline-darkBlue dark:focus-visible:outline-white sm:text-xl md:text-lg lg:text-xl xl:text-2xl"
        >
          Where in the world?
        </Link>
        <button
          aria-label="dark mode toggle"
          role="switch"
          aria-checked={enabled}
          onClick={() => setDarkMode(!enabled)}
          className="flex items-center gap-1 rounded text-xs outline-none outline-offset-8 focus-visible:outline focus-visible:outline-darkBlue dark:focus-visible:outline-white md:gap-3 md:text-sm"
        >
          {enabled ? (
            <SunIcon alt="Sun icon" className="w-3 md:w-4" />
          ) : (
            <MoonIcon alt={"Moon icon"} className="w-3 md:w-4" />
          )}
          <span>{enabled ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
}
