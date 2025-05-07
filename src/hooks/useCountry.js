import { getUrl } from "@/utils/getUrl";
import { useQuery } from "@tanstack/react-query";

export function useCountry(countryName) {
	return useQuery({
		queryKey: ["country", countryName],
		queryFn: async () => {
			const res = await fetch(getUrl(countryName));

			if (!res.ok) {
				throw new Error("Country not found");
			}

			return await res.json();
		},
	});
}
