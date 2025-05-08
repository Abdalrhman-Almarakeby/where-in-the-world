import { API_URL } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch a list of countries.
 *
 * @returns {import('@tanstack/react-query').UseQueryResult<import("@/types").CountrySummary[], Error>} - React Query result containing the countries data.
 */
export function useCountries() {
	return useQuery({
		queryKey: ["countries"],
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
