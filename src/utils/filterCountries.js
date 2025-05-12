/**
 * Filters a list of countries by a specified region.
 *
 * @param {import("@/types").CountrySummary[]} countries - The list of country objects to filter.
 * @param {string|null} region - The region to filter by. If null or "All", no filtering is applied.
 * @returns {import("@/types").CountrySummary[]} - The filtered list of countries.
 */
function filterByRegion(countries, region) {
	const searchRegion = region ?? "All";
	return countries.filter((country) => {
		return searchRegion === "All" || country.region === searchRegion;
	});
}

/**
 * Filters a list of countries by a search term.
 *
 * @param {import("@/types").CountrySummary[]} countries - The list of country objects to filter.
 * @param {string} term - The search term to filter by.
 * @returns {import("@/types").CountrySummary[]} - The filtered list of countries.
 */
function filterBySearchTerm(countries, term) {
	const search = term.trim().toLowerCase() ?? "";

	return countries?.filter(
		(country) =>
			country.name?.common?.toLowerCase().includes(search) ||
			country.name?.official?.toLowerCase().includes(search) ||
			country.capital?.toString().toLowerCase().includes(search),
	);
}

/**
 * Filters a list of countries based on region and search term.
 *
 * @param {import("@/types").CountrySummary[]} countries - The list of country objects to filter.
 * @param {URLSearchParams} searchParams - The search parameters containing "region" and "searchTerm".
 * @returns {import("@/types").CountrySummary[]} - The filtered list of countries.
 */
export function filterCountries(countries, searchParams) {
	const region = searchParams.get("region");
	const searchTerm = searchParams.get("searchTerm");

	let filtered = countries;
	filtered = filtered.filter((country) => country.name.common !== "Israel");
	filtered = region ? filterByRegion(filtered, region) : filtered;
	filtered = searchTerm ? filterBySearchTerm(filtered, searchTerm) : filtered;

	return filtered;
}

/**
 * Get the data that will be shown (current countries , current page number , the number of all pages )
 *
 * @param {import("@/types").CountrySummary[]} data - The list of country objects to filter.
 * @param {URLSearchParams} searchParams - The search parameters containing "region" and "searchTerm".
 * @param {number} countriesPerPage - The number of countries to display per page.
 * @returns {{ currentCountries: import("@/types").CountrySummary[] | null, currentPage: number, nPages: number }} - The filtered list of countries.
 */
export function getCountriesData(data, searchParams, countriesPerPage) {
	const countries = data ? filterCountries(data, searchParams) : null;
	const currentPage = Number.parseInt(searchParams.get("page")) || 1;

	const indexOfLastRecord = currentPage * countriesPerPage;
	const indexOfFirstRecord = indexOfLastRecord - countriesPerPage;

	const currentCountries = countries?.slice(
		indexOfFirstRecord,
		indexOfLastRecord,
	);

	const nPages = Math.ceil(countries?.length / countriesPerPage);
	return { currentCountries, currentPage, nPages };
}
