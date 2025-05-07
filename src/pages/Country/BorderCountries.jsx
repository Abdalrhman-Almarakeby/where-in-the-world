import { countriesCode } from "@/utils/countriesCode";
import { fromKebabCase } from "@/utils/string";
import PropTypes from "prop-types";
import { Link } from "react-router";

/**
 * Renders a list of neighboring countries as navigable links.
 *
 * Special logic is applied to handle the presence of both "ISR" (Israel) and "PSE" (Palestine):
 * - If both are present, "ISR" is removed.
 * - If only "ISR" is present, it is replaced with "PSE".
 *
 * Each country code is mapped to its name using the `countriesCode` map,
 * and displayed as a capitalized link.
 *
 * @param {{ countries: string[] }} props - An array of country codes representing border countries.
 */
export function BorderCountries({ countries }) {
	if (countries.includes("ISR") && countries.includes("PSE")) {
		countries = countries.filter((country) => country !== "ISR");
	}

	if (countries.includes("ISR")) {
		countries[countries.indexOf("ISR")] = "PSE";
	}

	return (
		<nav
			className="flex flex-col gap-4 capitalize text-dark-blue dark:font-semibold dark:text-white sm:gap-6 xl:col-span-2 2xl:col-span-1"
			aria-label="Border countries"
		>
			<p
				className="flex flex-col text-xl font-extrabold dark:font-semibold sm:text-2xl"
				id="borderCountriesHeader"
			>
				Border Countries
			</p>
			<div
				className="flex flex-wrap gap-4"
				aria-labelledby="borderCountriesHeader"
			>
				{countries.map((border) => {
					const countryName = Object.keys(countriesCode).find(
						(key) => countriesCode[key] === border,
					);

					return (
						<Link
							to={`/country/${countryName}`}
							className="rounded-sm px-5 py-1 text-sm capitalize shadow-xl focus-visible:outline focus-visible:outline-dark-blue dark:bg-blue dark:shadow-lg dark:focus-visible:outline-white sm:text-base"
							key={border}
							title={`Go to ${fromKebabCase(countryName)} page`}
							aria-label={`Go to ${fromKebabCase(countryName)} page`}
						>
							{fromKebabCase(countryName)}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}

BorderCountries.propTypes = {
	countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};
