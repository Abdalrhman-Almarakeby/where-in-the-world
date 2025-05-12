import { CountryCard } from "@/components/Home/CountryCard";
import { NoCountriesFound } from "@/components/Home/NoCountriesFound";
import { Pagination } from "@/components/Home/Pagination";
import { SearchBar } from "@/components/Home/SearchBar";
import { Loading } from "@/components/Loading";
import { useCountries } from "@/hooks/useCountries";
import { getCountriesData } from "@/utils/filterCountries";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function Home() {
	const [searchParams, setSearchParams] = useSearchParams({
		region: "All",
		searchTerm: "",
		page: "1",
	});

	const { data } = useCountries();

	const [countriesPerPage, setCountriesPerPage] = useState(10);

	// handle the number of countries card per page
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 1024) {
				setCountriesPerPage(10);
			} else if (window.innerWidth >= 1024 && window.innerWidth < 1536) {
				setCountriesPerPage(12);
			} else {
				setCountriesPerPage(15);
			}
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const { currentCountries, currentPage, nPages } = getCountriesData(
		data,
		searchParams,
		countriesPerPage,
	);

	return (
		<main className="grow flex flex-col bg-light-gray px-5 py-10 text-dark-blue dark:bg-dark-blue dark:text-white">
			{!data ? (
				<Loading />
			) : (
				<div className="container">
					<SearchBar
						searchParams={searchParams}
						setSearchParams={setSearchParams}
					/>

					{currentCountries &&
						(currentCountries.length ? (
							<section id="cards-container">
								{currentCountries.map((country) => (
									<CountryCard key={country.name.common} {...country} />
								))}
							</section>
						) : (
							<NoCountriesFound />
						))}
				</div>
			)}
			{data && nPages > 1 && (
				<Pagination
					nPages={nPages}
					currentPage={currentPage}
					setSearchParams={setSearchParams}
				/>
			)}
		</main>
	);
}
