import { Loading } from "@/components/Loading";
import { SearchBar } from "@/components/SearchBar";
import { filterCountries } from "@/utils/filterCountries";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { CountryCard } from "./CountryCard";
import { NoCountriesFound } from "./NoCountriesFound";
import { Pagination } from "./Pagination";

export function Home() {
	const [searchParams, setSearchParams] = useSearchParams({
		region: "All",
		searchTerm: "",
		page: 1,
	});
	const { data, isLoading, error } = useQuery({
		queryKey: ["countries", searchParams],
		queryFn: async () => {
			const res = await fetch(
				"https://restcountries.com/v3.1/all?fields=name,capital,flags,languages,region,population,cca3,cca2",
			);
			if (!res.ok) {
				throw new Error("Country not found");
			}
			return await res.json();
		},
		keepPreviousData: true,
	});

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

	// Get the data that will be shown (current countries , current page number , the number of all pages )
	function getCountriesData(data) {
		const countries = data ? filterCountries(data, searchParams) : null;
		const currentPage = Number.parseInt(searchParams.get("page")) || 1;

		const indexOfLastRecord = currentPage * countriesPerPage;
		const indexOfFirstRecord = indexOfLastRecord - countriesPerPage;

		const currentCountries = countries?.slice(
			indexOfFirstRecord,
			indexOfLastRecord,
		);

		const nPages = Math.ceil(countries?.length / countriesPerPage);
		return { currentCountries, currentPage, nPages };
	}

	const { currentCountries, currentPage, nPages } = getCountriesData(data);

	return (
		<main className="grow bg-light-gray px-5 py-10 text-dark-blue dark:bg-dark-blue dark:text-white">
			{isLoading ? (
				<Loading />
			) : (
				<div className="container">
					<SearchBar
						searchParams={searchParams}
						setSearchParams={setSearchParams}
					/>
					{error && (
						<div className="text-dark-blue dark:text-white">
							{error.message}
						</div>
					)}
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
			{!isLoading && nPages > 1 && (
				<Pagination
					nPages={nPages}
					currentPage={currentPage}
					setSearchParams={setSearchParams}
				/>
			)}
		</main>
	);
}
