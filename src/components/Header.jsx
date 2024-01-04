import moonIcon from "../assets/icons/moon.svg";
import sunIcon from "../assets/icons/sun.svg";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const [enabled, setDarkMode] = useDarkMode();

  return (
    <header className="z-50 bg-white text-veryDarkBlue shadow-md dark:bg-blue dark:text-white">
      <div className="container flex items-center justify-between px-6 py-7">
        <p className="font-extrabold sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          Where in the world?
        </p>
        <button
          onClick={() => setDarkMode(!enabled)}
          className="flex items-center gap-1 text-xs outline-none md:gap-3 md:text-sm"
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
