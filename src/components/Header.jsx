import { useDarkMode } from "@/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";

export function Header() {
	const [enabled, setDarkMode] = useDarkMode();

	return (
		<header className="z-50 bg-white text-very-dark-blue shadow-md dark:bg-blue dark:text-white">
			<div className="container flex items-center justify-between px-6 py-7">
				<Link
					title="Go to home page"
					to="/"
					className="rounded-sm font-extrabold outline-offset-8 focus-visible:outline focus-visible:outline-dark-blue dark:focus-visible:outline-white sm:text-xl md:text-lg lg:text-xl xl:text-2xl"
				>
					<h1>Where in the world?</h1>
				</Link>
				<button
					type="button"
					title={enabled ? "Light mode toggle" : "Dark mode toggle"}
					aria-label={enabled ? "Light mode toggle" : "Dark mode toggle"}
					role="switch"
					aria-checked={enabled}
					onClick={() => setDarkMode((prev) => !prev)}
					className="flex cursor-pointer items-center gap-1 rounded-sm text-xs outline-hidden outline-offset-8 focus-visible:outline focus-visible:outline-dark-blue dark:focus-visible:outline-white md:gap-3 md:text-sm"
				>
					{enabled ? <Sun /> : <Moon />}
					<span>{enabled ? "Light Mode" : "Dark Mode"}</span>
				</button>
			</div>
		</header>
	);
}
