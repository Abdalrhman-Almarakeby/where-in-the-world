import { toKebabCase } from "@/utils/string";
import * as countries from "country-flag-icons/react/3x2";
import PropTypes from "prop-types";
import { Link } from "react-router";

/**
 * Displays a card with basic information about a country
 *
 * @param {{
 *   name: { common: string },
 *   flags: { alt?: string },
 *   population: number,
 *   region: string,
 *   capital?: string[],
 *   cca2: string
 * }} props - Country data used to render the card.
 */
export function CountryCard({
	name: { common: name },
	population,
	flags,
	region,
	capital,
	cca2,
}) {
	const Flag = countries[cca2];

	return (
		<Link
			to={`/country/${toKebabCase(name)}`}
			className="flex h-full min-w-fit flex-col justify-between overflow-hidden rounded-sm bg-white shadow-xl focus:outline-2 focus:outline-dark-blue dark:bg-blue dark:focus:outline-white"
			title={name}
			aria-label={`Country Card: ${name}`}
		>
			<Flag
				role="img"
				alt={flags.alt || `${name} flag`}
				aria-label={`Flag of ${name}`}
				className="aspect-3/2"
			/>
			<div className="p-5 pb-10">
				<h2
					className="py-3 text-xl font-bold"
					aria-label={`Country Name: ${name}`}
				>
					{name}
				</h2>
				<p className="font-semibold">
					Population:{" "}
					<span className="font-normal">{population.toLocaleString()}</span>
				</p>
				<p className="font-semibold">
					Region: <span className="font-normal">{region}</span>
				</p>
				<p className="font-semibold">
					Capital:{" "}
					<span className="font-normal">
						{name === "Palestine"
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
		alt: PropTypes.string,
	}).isRequired,
	population: PropTypes.number.isRequired,
	region: PropTypes.string.isRequired,
	capital: PropTypes.arrayOf(PropTypes.string),
	cca2: PropTypes.string.isRequired,
};
