import PropTypes from "prop-types";
import countriesCode from "../utils/countriesCode";

export default function BorderCountries({ countries }) {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="flex flex-col text-xl font-semibold">Border Countries</p>
      {/* TODO: Add link the the countries */}
      <div className="flex gap-4 flex-wrap">
        {countries.map((border) => {
          if (border === "ISR") return null;

          return (
            <p
              className="capitalize text-sm rounded shadow-lg bg-blue py-1 px-5 "
              key={border}
            >
              {countriesCode[border]}
            </p>
          );
        })}
      </div>
    </div>
  );
}

BorderCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
