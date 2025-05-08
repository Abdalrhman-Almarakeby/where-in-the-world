import { API_URL } from "@/lib/constant";
import { countriesCode } from "@/utils/countriesCode";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch data for a specific country.
 *
 * @param {string} countryName - The name of the country to fetch data for in kebab case.
 * @returns {import('@tanstack/react-query').UseQueryResult<Object, Error>} - React Query result containing the country data.
 */
export function useCountry(countryName) {
	return useQuery({
		queryKey: ["country", countryName],
		queryFn: async () => {
			const res = await fetch(
				`${API_URL}/alpha/${countriesCode[countryName]}?fields=name,region,subregion,capital,population,currencies,languages,tld,borders,flags,maps,cca2`,
			);

			if (!res.ok) {
				throw new Error("Country not found");
			}

			return await res.json();
		},
	});
}
