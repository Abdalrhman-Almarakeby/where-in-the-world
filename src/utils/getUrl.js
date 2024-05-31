import { countriesCode } from "./countriesCode";

export function getUrl(name) {
  const fields =
    "?fields=name,region,subregion,capital,population,currencies,languages,tld,borders,flags,maps,cca2";

  return `https://restcountries.com/v3.1/alpha/${countriesCode[name]}${fields}`;
}
