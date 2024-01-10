import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import countriesCode from "../../utils/countriesCode";
import toKebabCase from "../../utils/toKebabCase";

export default function BorderCountries({ countries }) {
  return (
    <div className="flex flex-col gap-4 capitalize text-darkBlue dark:font-semibold dark:text-white sm:gap-6">
      <p className="flex flex-col text-xl font-extrabold dark:font-semibold sm:text-2xl">
        Border Countries
      </p>
      <div className="flex flex-wrap gap-4">
        {countries.map((border) => {
          if (border === "ISR") return null;

          return (
            <Link
              to={`/country/${toKebabCase(countriesCode[border])}`}
              className="rounded px-5 py-1 text-sm capitalize shadow-xl dark:bg-blue dark:shadow-lg sm:text-base"
              key={border}
            >
              {countriesCode[border]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

BorderCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
