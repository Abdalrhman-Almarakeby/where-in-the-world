import { API_URL } from "@/constant";
import { useQuery } from "@tanstack/react-query";

export function useCountries({ region, search }) {
	return useQuery({
		queryKey: ["countries", { region, search }],
		queryFn: async () => {
			const endpoint = `${API_URL}/all?fields=name,capital,flags,languages,region,population,cca3,cca2`;

			const response = await fetch(endpoint);

			if (!response.ok) {
				throw new Error("Failed to fetch countries");
			}

			return await response.json();
		},
	});
}
