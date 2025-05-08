import { API_URL } from "@/constant";
import { countriesCode } from "./countriesCode";

export function getUrl(name) {
	const fields =
		"?fields=name,region,subregion,capital,population,currencies,languages,tld,borders,flags,maps,cca2";

	return `${API_URL}/alpha/${countriesCode[name]}${fields}`;
}
