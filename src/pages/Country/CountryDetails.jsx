import PropType from "prop-types";
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
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:gap-16 lg:px-3 lg:py-16">
      <h3 className="hidden text-5xl font-bold text-darkBlue dark:text-white lg:block">
        {name.common}
      </h3>
      <div className="py-14 sm:px-16 md:px-40 lg:hidden lg:self-center lg:p-6">
        <img
          className="shadow-1 dark:shadow-none"
          src={flags.svg}
          alt={flags.alt || `${name.common} flag`}
        />
      </div>
      <div className="grid gap-8 font-extrabold capitalize text-darkBlue dark:font-semibold dark:text-white sm:gap-10 sm:text-lg md:grid-cols-2 lg:grid-cols-3 lg:items-center lg:gap-16 lg:text-base">
        <h3 className="text-[2.5rem] font-bold sm:text-5xl md:col-span-2 lg:hidden">
          {name.common}
        </h3>
        <img
          className="hidden shadow-1 dark:shadow-none lg:block"
          src={flags.svg}
          alt={flags.alt || `${name.common} flag`}
        />
        <div className="flex flex-col gap-2 tracking-wide lg:gap-4">
          <p>
            {Object.keys(name.nativeName).length > 1
              ? "Native Names"
              : "Native Name"}
            :{" "}
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
            Region:{" "}
            <span className="font-normal dark:font-extralight">{region}</span>
          </p>
          <p>
            Subregion:{" "}
            <span className="font-normal dark:font-extralight">
              {subregion}
            </span>
          </p>
          <p>
            {Object.keys(capital).length > 1 ? "Capitals" : "Capital"}:{" "}
            <span className="font-normal dark:font-extralight">
              {capital.join(", ")}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 tracking-wide lg:gap-4">
          {tld && (
            <p>
              Top Level Domain:{" "}
              <span className="font-normal dark:font-extralight">
                {tld.join(", ")}
              </span>
            </p>
          )}

          <p>
            {Object.keys(currencies).length > 1 ? "Currencies" : "Currency"}:{" "}
            <span className="font-normal dark:font-extralight">
              {formatCurrencies(currencies)}
            </span>
          </p>
          <p>
            {Object.keys(languages).length > 1 ? "Languages" : "Language"}:{" "}
            <span className="font-normal dark:font-extralight">
              {formatLanguages(languages)}
            </span>{" "}
          </p>
        </div>
      </div>
      {borders.length > 0 && <BorderCountries countries={borders} />}
    </div>
  );
}

CountryDetails.propTypes = {
  name: PropType.shape({
    common: PropType.string.isRequired,
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
};
