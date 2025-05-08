import { API_URL } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch a list of countries.
 *
 * @param {Object} params - Parameters for filtering countries.
 * @param {string} [params.region] - Optional region to filter countries by.
 * @param {string} [params.search] - Optional search term to filter countries.
 * @returns {import('@tanstack/react-query').UseQueryResult<Object[], Error>} - React Query result containing the countries data.
 */
export function useCountries({ region, search }) {
	return useQuery({
		queryKey: ["countries", { region, search }],
		queryFn: async () => {
			const endpoint = `${API_URL}/all?fields=name,capital,flags,region,population,cca2`;

			const response = await fetch(endpoint);

			if (!response.ok) {
				throw new Error("Failed to fetch countries");
			}

			return await response.json();
		},
	});
}
