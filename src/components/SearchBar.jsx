import { SearchIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export function SearchBar({ searchParams, setSearchParams }) {
	const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
	const searchRef = useRef();

	useEffect(() => {
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
		searchRef.current.focus();
	}

	function handleChange(e) {
		setSearchParams(
			(prev) => {
				prev.set([e.target.name], e.target.value);
				prev.set("page", 1);
				return prev;
			},
			{ replace: true },
		);
	}

	return (
		<form className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
			<div
				onClick={focusOnSearch}
				className="flex w-96 max-w-full cursor-text items-center justify-start gap-2 rounded-sm bg-white px-4 py-2 shadow-lg transition-[outline] focus-within:outline dark:bg-blue dark:text-white sm:px-6 sm:py-4"
			>
				<label htmlFor="search-input">
					<SearchIcon className="w-5 cursor-text text-dark-gray" />
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
			<div className="ml-5 flex items-center gap-5">
				<label htmlFor="region-filter" className="font-semibold">
					Filter by Region
				</label>
				<select
					id="region-filter"
					value={searchParams.get("region") || "All"}
					onChange={handleChange}
					name="region"
					aria-label="Region filter"
					className="rounded-sm bg-white px-1 py-2 text-base shadow-none outline-hidden focus-visible:outline focus-visible:outline-dark-blue dark:bg-blue dark:focus-visible:outline-white sm:px-2 md:py-4"
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
