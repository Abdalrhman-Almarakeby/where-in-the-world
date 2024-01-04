import PropType from "prop-types";
import { Link } from "react-router-dom";
import formatNumberWithCommas from "../utils/formatNumberWithCommas";
import toKebabCase from "../utils/toKebabCase";

export default function CountryCard({ country }) {
  const { name, flags, population, region, capital } = country;

  //!!!!!!!!!!!!!!!!!!!!//
  if (name.common === "Israel") return null;
  //!!!!!!!!!!!!!!!!!!!!//

  return (
    <Link to={`/country/${toKebabCase(name.common)}`}>
      <div className="card" title={name.common}>
        <img
          src={flags.svg}
          alt={flags.alt || `${name.common} flag`}
          aria-label={`Flag of ${name.common}`}
          style={name.common === "Nepal" ? { width: "60%" } : {}}
        />
        <div>
          <h3 aria-label={`${name.common}`}>{name.common}</h3>
          <p>
            Population: <span>{formatNumberWithCommas(population)}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital:{" "}
            <span>
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
  country: PropType.shape({
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
  }).isRequired,
};
