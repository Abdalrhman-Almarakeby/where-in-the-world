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
