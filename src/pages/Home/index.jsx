import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import filterCountries from "../../utils/filterCountries";
import SearchBar from "../../components/SearchBar";
import CountryCard from "./CountryCard";
import Loading from "../../components/Loading";
import NoCountriesFound from "./NoCountriesFound";
import Pagination from "./Pagination";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams({
    region: "All",
    searchTerm: "",
    page: 1,
  });
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,languages,region,population,cca3"
  );
  const [countriesPerPage] = useState(10);

  const countries = data ? filterCountries(data, searchParams) : null;

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const indexOfLastRecord = currentPage * countriesPerPage;
  const indexOfFirstRecord = indexOfLastRecord - countriesPerPage;

  const currentCountries = countries?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(countries?.length / countriesPerPage);

  function handlePageChange(page) {
    setSearchParams(
      (prev) => {
        prev.set("page", page);
        return prev;
      },
      { replace: true }
    );
  }

  return (
    <main className="flex-grow bg-lightGray px-5 py-10 text-darkBlue dark:bg-darkBlue dark:text-white">
      <div className="container">
        <SearchBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handlePageChange={handlePageChange}
        />
        {isPending && <Loading />}
        {error && <div className="text-darkBlue dark:text-white">{error}</div>}
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
      {!isPending && nPages > 1 && (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}
