import PropType from "prop-types";
import {
  formatCurrencies,
  formatLanguages,
  formatNativeName,
} from "../utils/formatObjectValues";
import formatNumberWithCommas from "../utils/formatNumberWithCommas";
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
    <div>
      <img
        className="py-14"
        src={flags.svg}
        alt={flags.alt || `${name.common} flag`}
      />
      <div className="flex font-semibold flex-col capitalize gap-8 text-white">
        <h3 className="font-bold text-4xl">{name.common}</h3>
        <div className="flex flex-col gap-2 tracking-wide text-sm">
          <p>
            {Object.keys(name.nativeName).length > 1
              ? "Native Names"
              : "Native Name"}
            :{" "}
            <span className="font-extralight">
              {formatNativeName(name.nativeName)}
            </span>
          </p>
          <p>
            Population:{" "}
            <span className="font-extralight">
              {formatNumberWithCommas(population)}
            </span>
          </p>
          <p>
            Region: <span className="font-extralight">{region}</span>
          </p>
          <p>
            Subregion: <span className="font-extralight">{subregion}</span>
          </p>
          <p>
            {Object.keys(capital).length > 1 ? "Capitals" : "Capital"}:{" "}
            <span className="font-extralight">{capital.join(", ")}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 tracking-wide text-sm">
          <p>
            Top Level Domain:{" "}
            <span className="font-extralight">{tld.join(", ")}</span>
          </p>

          <p>
            {Object.keys(currencies).length > 1 ? "Currencies" : "Currency"}:{" "}
            <span className="font-extralight">
              {formatCurrencies(currencies)}
            </span>
          </p>
          <p>
            {Object.keys(languages).length > 1 ? "Languages" : "Language"}:{" "}
            <span className="font-extralight">
              {formatLanguages(languages)}
            </span>{" "}
          </p>
        </div>
        {borders && <BorderCountries countries={borders} />}
      </div>
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
  tld: PropType.arrayOf(PropType.string).isRequired,
  borders: PropType.arrayOf(PropType.string),
  flags: PropType.shape({
    svg: PropType.string.isRequired,
    alt: PropType.string,
  }).isRequired,
};
