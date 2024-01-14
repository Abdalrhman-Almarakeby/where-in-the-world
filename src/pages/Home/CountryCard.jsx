import PropType from "prop-types";
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
      className="rounded outline-2 focus:outline focus:outline-darkBlue dark:focus:outline-white"
    >
      <div
        className="flex h-full min-w-fit flex-col justify-between overflow-hidden rounded bg-white shadow-xl dark:bg-blue"
        title={name.common}
        aria-label={`Country Card: ${name.common}`}
      >
        <img
          loading="lazy"
          src={flags.svg}
          alt={flags.alt || `${name.common} flag`}
          aria-label={`Flag of ${name.common}`}
          style={name.common === "Nepal" ? { width: "60%" } : {}}
        />
        <div className="p-5 pb-10">
          <h3
            className="py-3 text-xl font-extrabold"
            aria-label={`Country Name: ${name.common}`}
          >
            {name.common}
          </h3>
          <p className="font-extrabold">
            Population:{" "}
            <span className="font-normal">
              {formatNumberWithCommas(population)}
            </span>
          </p>
          <p className="font-extrabold">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="font-extrabold">
            Capital:{" "}
            <span className="font-normal">
              {name.common === "Palestine"
                ? "Jerusalem"
                : capital?.join(", ") || "No data"}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  name: PropType.shape({
    common: PropType.string.isRequired,
  }).isRequired,
  flags: PropType.shape({
    svg: PropType.string.isRequired,
    alt: PropType.string,
  }).isRequired,
  population: PropType.number.isRequired,
  region: PropType.string.isRequired,
  capital: PropType.arrayOf(PropType.string),
};
