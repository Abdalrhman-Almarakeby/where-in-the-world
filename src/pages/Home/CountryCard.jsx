import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatNumberWithCommas from "../../utils/formatNumberWithCommas";
import toKebabCase from "../../utils/toKebabCase";

export default function CountryCard({
  name,
  flags,
  population,
  region,
  capital,
}) {
  return (
    <Link
      to={`/country/${toKebabCase(name.common)}`}
      className="flex h-full min-w-fit flex-col justify-between overflow-hidden rounded bg-white shadow-xl outline-2 focus:outline focus:outline-darkBlue dark:bg-blue dark:focus:outline-white"
      title={name.common}
      aria-label={`Country Card: ${name.common}`}
    >
      <img
        loading="lazy"
        src={flags.svg}
        alt={`${name.common} flag`}
        aria-label={`Flag of ${name.common}`}
        style={name.common === "Nepal" ? { width: "60%" } : {}}
      />
      <div className="p-5 pb-10">
        <h2
          className="py-3 text-xl font-bold"
          aria-label={`Country Name: ${name.common}`}
        >
          {name.common}
        </h2>
        <p className="font-semibold" id="country-population">
          Population:{" "}
          <span className="font-normal">
            {formatNumberWithCommas(population)}
          </span>
        </p>
        <p className="font-semibold" id="country-region">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="font-semibold" id="country-capital">
          Capital:{" "}
          <span className="font-normal">
            {name.common === "Palestine"
              ? "Jerusalem"
              : capital?.join(", ") || "No data"}
          </span>
        </p>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  name: PropTypes.shape({
    common: PropTypes.string.isRequired,
  }).isRequired,
  flags: PropTypes.shape({
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.arrayOf(PropTypes.string),
};
