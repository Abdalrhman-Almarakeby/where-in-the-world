import { API_URL } from "@/constant";
import { countriesCode } from "@/utils/countriesCode";
import { useQuery } from "@tanstack/react-query";

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
