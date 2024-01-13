import { Link } from "react-router-dom";
import moonIcon from "../assets/icons/moon.svg";
import sunIcon from "../assets/icons/sun.svg";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const [enabled, setDarkMode] = useDarkMode();

  return (
    <header className="z-50 bg-white text-veryDarkBlue shadow-md dark:bg-blue dark:text-white ">
      <div className="container flex items-center justify-between px-6 py-7">
        <Link
          to="/"
          className="font-extrabold sm:text-xl md:text-lg lg:text-xl xl:text-2xl focus-within:outline focus-within:outline-darkBlue dark:focus-within:outline-white outline-offset-8 rounded"
        >
          Where in the world?
        </Link>
        <button
          aria-label="dark mode toggle"
          role="switch"
          aria-checked={enabled}
          onClick={() => setDarkMode(!enabled)}
          className="flex items-center gap-1 text-xs outline-none md:gap-3 md:text-sm focus-within:outline focus-within:outline-darkBlue dark:focus-within:outline-white outline-offset-8 rounded"
        >
          <img
            src={enabled ? sunIcon : moonIcon}
            alt={enabled ? "Sun icon" : "Moon icon"}
            className="w-3 md:w-4"
          />
          <span>{enabled ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
}
