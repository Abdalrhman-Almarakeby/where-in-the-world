import * as countries from "country-flag-icons/react/3x2";
import PropType from "prop-types";
import { BorderCountries } from "./BorderCountries";

/**
 * Displays detailed information about a specific country.
 *
 * @param {import("@/types").Country} props - Country data used to render the details.
 */

export function CountryDetails({
	name: { common, official, nativeName },
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
		common === "Palestine" ? (
			<p>
				Capital:{" "}
				<span className="font-normal dark:font-extralight">Jerusalem</span>
			</p>
		) : null;

	if (common === "Palestine" && borders) {
		borders = borders.filter((border) => border !== "PSE");
		borders = [...borders, "SYR", "LBN"];
	}

	const Flag = countries[cca2];

	return (
		<main className="grid grid-cols-1 gap-10 lg:gap-16 lg:px-3 lg:pb-14 lg:pt-20 xl:grid-cols-2 xl:gap-x-24 xl:gap-y-14 xl:px-6">
			<h3 className="hidden text-5xl font-bold text-dark-blue dark:text-white lg:block xl:hidden">
				{common}
			</h3>
			<div className="py-14 sm:px-16 md:px-40 lg:hidden lg:self-center lg:p-6 xl:block xl:self-start xl:p-0 2xl:row-span-2">
				<Flag
					role="img"
					className="shadow-1 dark:shadow-none"
					aria-label={flags.alt || `${common} flag`}
				/>
			</div>
			<section className="grid gap-8 font-extrabold capitalize text-dark-blue dark:font-semibold dark:text-white sm:gap-10 sm:text-lg md:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-16 lg:text-base xl:grid-cols-2 xl:gap-10 xl:text-lg">
				<h3 className="text-[2.5rem] font-bold sm:text-5xl md:col-span-2 lg:hidden xl:block">
					{common}
				</h3>
				<Flag
					role="img"
					className="hidden shadow-1 dark:shadow-none lg:block xl:hidden"
					alt={flags.alt || `${common} flag`}
				/>
				<div className="flex flex-col gap-2 tracking-wide lg:gap-4">
					<p>
						Official Name:{" "}
						<span className="font-normal dark:font-extralight">{official}</span>
					</p>
					<p>
						{Object.keys(nativeName).length > 1
							? "Native Names"
							: "Native Name"}
						:{" "}
						<span className="font-normal dark:font-extralight">
							{Array.from(
								new Set(Object.values(nativeName).map((name) => common)),
							).join(", ")}
						</span>
					</p>
					<p>
						Population:{" "}
						<span className="font-normal dark:font-extralight">
							{population.toLocaleString()}
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
					{palestineCapital ? (
						palestineCapital
					) : (
						<p>
							{capital.length > 1 ? "Capitals" : "Capital"}:{" "}
							<span className="font-normal dark:font-extralight">
								{capital.join(", ")}
							</span>
						</p>
					)}
				</div>
				<div className="flex flex-col gap-2 tracking-wide lg:gap-4">
					{tld && (
						<p>
							{tld.length ? "Top Level Domains" : "Top Level Domain"}:{" "}
							<span className="font-normal dark:font-extralight">
								{tld.join(", ")}
							</span>
						</p>
					)}

					<p>
						{Object.keys(currencies).length > 1 ? "Currencies" : "Currency"}:{" "}
						<span className="font-normal dark:font-extralight">
							{Object.values(currencies)
								.map((currency) => `${currency.name} (${currency.symbol})`)
								.join(", ")}
						</span>
					</p>
					<p>
						{Object.keys(languages).length > 1 ? "Languages" : "Language"}:{" "}
						<span className="font-normal dark:font-extralight">
							{Object.values(languages).join(", ")}
						</span>{" "}
					</p>

					<a
						className="rounded-sm font-normal underline outline-offset-8 focus-visible:outline-2 focus-visible:outline-dark-blue dark:focus-visible:outline-white"
						href={`https://en.wikipedia.org/wiki/${common.split(" ").join("_")}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Read more about ${common} on Wikipedia`}
					>
						Read more in Wikipedia
					</a>
					<a
						className="rounded-sm font-normal underline outline-offset-8 focus-visible:outline-2 focus-visible:outline-dark-blue dark:focus-visible:outline-white"
						href={maps.googleMaps}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View ${common} on Google Maps`}
					>
						View {common} on Google Maps
					</a>
				</div>
			</section>
			{(borders ?? []).length > 0 && (
				<BorderCountries countries={borders ?? []} />
			)}
		</main>
	);
}

CountryDetails.propTypes = {
	name: PropType.shape({
		official: PropType.string,
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
		alt: PropType.string,
	}).isRequired,
	maps: PropType.shape({
		googleMaps: PropType.string.isRequired,
		openStreetMaps: PropType.string.isRequired,
	}).isRequired,
	cca2: PropType.string.isRequired,
};
