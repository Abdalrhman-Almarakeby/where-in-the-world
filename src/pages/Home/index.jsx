import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import filterCountries from "../../utils/filterCountries";
import SearchBar from "../../components/SearchBar";
import CountryCard from "./CountryCard";
import Loading from "../../components/Loading";
import NoCountriesFound from "./NoCountriesFound";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams({
    region: "All",
    searchTerm: "",
  });
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,languages,region,population,cca3"
  );

  const countries = data ? filterCountries(data, searchParams) : null;

  return (
    <>
      <main className="flex-grow bg-lightGray px-5 py-10 text-darkBlue dark:bg-darkBlue dark:text-white">
        <div className="container">
          <SearchBar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          {isPending && <Loading />}
          {error && <div>{error}</div>}
          {countries &&
            (countries.length ? (
              <section id="cards-container">
                {countries.map((country) => (
                  <CountryCard key={country.name.common} country={country} />
                ))}
              </section>
            ) : (
              <NoCountriesFound />
            ))}
        </div>
      </main>
    </>
  );
}
