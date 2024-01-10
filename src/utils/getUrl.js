import fromKebabCase from "./fromKebabCase";

export default function getUrl(name) {
  const fields =
    "?fields=name,region,subregion,capital,population,currencies,languages,tld,borders,flags";

  return name !== "samoa"
    ? `https://restcountries.com/v3.1/name/${fromKebabCase(name)}${fields}`
    : `https://restcountries.com/v3.1/name/Independent State of Samoa${fields}`;
}
