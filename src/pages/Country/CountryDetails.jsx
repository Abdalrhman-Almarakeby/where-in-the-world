import PropType from "prop-types";
import * as countries from "country-flag-icons/react/3x2";
import {
  formatCurrencies,
  formatLanguages,
  formatNativeName,
} from "../../utils/formatObjectValues";
import formatNumberWithCommas from "../../utils/formatNumberWithCommas";
import BorderCountries from "./BorderCountries";

export default function CountryDetails({
  name,
  region,
  subregion,
  capital,
  population,
  currencies,
  languages,
  tld,
  borders,
  flags,
  maps,
  cca2,
}) {
  const palestineCapital =
    name.common === "Palestine" ? (
      <p>
        Capital: <span className="font-normal dark:font-extralight">Jerusalem</span>
      </p>
    ) : null;

  if (name.common === "Palestine") {
    borders = borders.filter((border) => border !== "PSE");
    borders = [...borders, "SYR", "LBN"];
  }

  const Flag = countries[cca2];

  return (
    <main className="grid grid-cols-1 gap-10 lg:gap-16 lg:px-3 lg:pb-14 lg:pt-20 xl:grid-cols-2 xl:gap-x-24 xl:gap-y-14 xl:px-6">
      <h3 className="hidden text-5xl font-bold text-darkBlue dark:text-white lg:block xl:hidden">
        {name.common}
      </h3>
      <div className="py-14 sm:px-16 md:px-40 lg:hidden lg:self-center lg:p-6 xl:block xl:self-start xl:p-0 2xl:row-span-2">
        <Flag
          role="img"
          className="shadow-1 dark:shadow-none"
          alt={flags.alt || `${name.common} flag`}
        />
      </div>
      <section className="grid gap-8 font-extrabold capitalize text-darkBlue dark:font-semibold dark:text-white sm:gap-10 sm:text-lg md:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-16 lg:text-base xl:grid-cols-2 xl:gap-10 xl:text-lg">
        <h3 className="text-[2.5rem] font-bold sm:text-5xl md:col-span-2 lg:hidden xl:block">
          {name.common}
        </h3>
        <Flag
          role="img"
          className="shadow-1 dark:shadow-none"
          alt={flags.alt || `${name.common} flag`}
        />
        <div className="flex flex-col gap-2 tracking-wide lg:gap-4">
          <p>
            {Object.keys(name.nativeName).length > 1 ? "Native Names" : "Native Name"}:{" "}
            <span className="font-normal dark:font-extralight">
              {formatNativeName(name.nativeName)}
            </span>
          </p>
          <p>
            Population:{" "}
            <span className="font-normal dark:font-extralight">
              {formatNumberWithCommas(population)}
            </span>
          </p>
          <p>
            Region: <span className="font-normal dark:font-extralight">{region}</span>
          </p>
          <p>
            Subregion: <span className="font-normal dark:font-extralight">{subregion}</span>
          </p>
          {palestineCapital ? (
            palestineCapital
          ) : (
            <p>
              {Object.keys(capital).length > 1 ? "Capitals" : "Capital"}:{" "}
              <span className="font-normal dark:font-extralight">{capital.join(", ")}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 tracking-wide lg:gap-4">
          {tld && (
            <p>
              {tld.length ? "Top Level Domains" : "Top Level Domain"}:{" "}
              <span className="font-normal dark:font-extralight">{tld.join(", ")}</span>
            </p>
          )}

          <p>
            {Object.keys(currencies).length > 1 ? "Currencies" : "Currency"}:{" "}
            <span className="font-normal dark:font-extralight">{formatCurrencies(currencies)}</span>
          </p>
          <p>
            {Object.keys(languages).length > 1 ? "Languages" : "Language"}:{" "}
            <span className="font-normal dark:font-extralight">{formatLanguages(languages)}</span>{" "}
          </p>

          <a
            className="rounded font-normal underline outline-2 outline-offset-8 focus-visible:outline focus-visible:outline-darkBlue dark:focus-visible:outline-white"
            href={`https://en.wikipedia.org/wiki/${name.common.split(" ").join("_")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read more about ${name.common} on Wikipedia`}
          >
            Read more in Wikipedia
          </a>
          <a
            className="rounded font-normal underline outline-2 outline-offset-8 focus-visible:outline focus-visible:outline-darkBlue dark:focus-visible:outline-white"
            href={maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${name.common} on Google Maps`}
          >
            View {name.common} on Google Maps
          </a>
        </div>
      </section>
      {borders.length > 0 && <BorderCountries countries={borders} />}
    </main>
  );
}

CountryDetails.propTypes = {
  name: PropType.shape({
    common: PropType.string,
    nativeName: PropType.object,
  }).isRequired,
  region: PropType.string.isRequired,
  subregion: PropType.string.isRequired,
  capital: PropType.arrayOf(PropType.string).isRequired,
  population: PropType.number.isRequired,
  currencies: PropType.object.isRequired,
  languages: PropType.object.isRequired,
  tld: PropType.arrayOf(PropType.string),
  borders: PropType.arrayOf(PropType.string),
  flags: PropType.shape({
    svg: PropType.string.isRequired,
    alt: PropType.string,
  }).isRequired,
  maps: PropType.shape({
    googleMaps: PropType.string.isRequired,
    openStreetMaps: PropType.string.isRequired,
  }).isRequired,
  cca2: PropType.string.isRequired,
};
