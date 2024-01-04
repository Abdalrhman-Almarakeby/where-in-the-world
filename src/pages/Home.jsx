import { useState } from "react";
import useFetch from "../hooks/useFetch";
import filterCountries from "../utils/filterCountries";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState({ region: "All", search: "" });
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const countries = filterCountries(data, searchTerm);

  return (
    <>
      <main className="min-h-screen bg-lightGray px-5 py-10 text-darkBlue dark:bg-darkBlue dark:text-white">
        <div className="container">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {isPending && <Loading />}
          {error && <div>{error}</div>}
          {countries && (
            <section id="cards-container">
              {countries.map((country) => (
                <CountryCard key={country.name.common} country={country} />
              ))}
            </section>
          )}
        </div>
      </main>
    </>
  );
}
