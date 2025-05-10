import { REGIONS } from "@/lib/constant";
import { ChevronDown, Search } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

/**
 * SearchBar component for filtering and searching countries.
 *
 * @param {Object} props
 * @param {URLSearchParams} props.searchParams
 * @param {import("react-router").SetURLSearchParams} props.setSearchParams
 */
export function SearchBar({ searchParams, setSearchParams }) {
	/** @type {React.RefObject<HTMLInputElement | null>} */
	const searchRef = useRef(null);

	useEffect(() => {
		/**
		 *
		 * @param {KeyboardEvent} e
		 */
		function handleKeyDown(e) {
			if (
				((e.code === "Slash" && e.ctrlKey) ||
					(e.code === "KeyK" && e.ctrlKey) ||
					(e.code === "KeyF" && e.ctrlKey)) &&
				searchRef.current
			) {
				e.preventDefault();
				focusOnSearch();
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	function focusOnSearch() {
		searchRef?.current?.focus();
	}

	/**
	 *
	 * @param {React.ChangeEvent<HTMLSelectElement | HTMLInputElement>} e
	 */
	function handleChange(e) {
		setSearchParams(
			(prev) => {
				prev.set(e.target.name, e.target.value);
				prev.set("page", "1");
				return prev;
			},
			{ replace: true },
		);
	}

	return (
		<form className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
			<div
				onClick={focusOnSearch}
				onKeyDown={(e) => e.key === "Enter" && focusOnSearch()}
				role="button"
				tabIndex={0}
				className="flex w-96 max-w-full cursor-text items-center justify-start gap-2 rounded-sm bg-white px-4 py-2 shadow-lg transition-[outline] focus-within:outline dark:bg-blue dark:text-white sm:px-6 sm:py-4"
			>
				<label htmlFor="search-input">
					<Search className="w-5 cursor-text text-dark-gray" />
				</label>
				<input
					autoComplete="off"
					ref={searchRef}
					value={searchParams.get("searchTerm") || ""}
					onChange={handleChange}
					name="searchTerm"
					type="search"
					id="search-input"
					placeholder="Search for a country..."
					aria-label="Search input"
					className="max-w-full grow bg-inherit font-semibold outline-hidden"
				/>
			</div>
			<div className="flex items-center justify-between w-full gap-5 md:w-auto">
				<label htmlFor="region-filter" className="font-semibold">
					Filter by Region
				</label>
				<div className="relative">
					<select
						id="region-filter"
						value={searchParams.get("region") || "All"}
						onChange={handleChange}
						name="region"
						aria-label="Region filter"
						className="appearance-none rounded-md bg-white px-4 py-2 pr-8 text-base font-semibold shadow-md outline-none transition-all hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-dark-blue dark:bg-blue dark:text-white dark:hover:bg-opacity-90 dark:focus-visible:ring-white"
					>
						{REGIONS.map((region) => (
							<option
								key={region}
								value={region}
								className="font-semibold text-inherit"
							>
								{region}
							</option>
						))}
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronDown className="size-4 text-gray-500 dark:text-gray-300" />
					</div>
				</div>
			</div>
		</form>
	);
}

SearchBar.propTypes = {
	searchParams: PropTypes.shape({
		searchTerm: PropTypes.string,
		region: PropTypes.string,
		get: PropTypes.func.isRequired,
		set: PropTypes.func.isRequired,
	}).isRequired,
	setSearchParams: PropTypes.func.isRequired,
};
