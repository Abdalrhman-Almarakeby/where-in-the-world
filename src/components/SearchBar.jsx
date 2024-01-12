import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import searchIcon from "../assets/icons/search-lens.svg";

export default function SearchBar(props) {
  const searchRef = useRef();
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    function handleKeyDown(e) {
      if (
        ((e.code === "Slash" && e.ctrlKey) ||
          (e.code === "KeyK" && e.ctrlKey)) &&
        searchRef.current
      ) {
        e.preventDefault();
        searchRef.current.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleChange(e) {
    props.setSearchParams(
      (prev) => {
        prev.set([e.target.name], e.target.value);
        return prev;
      },
      { replace: true }
    );
  }

  return (
    <form className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
      <div
        onClick={() => searchRef.current.focus()}
        className="flex w-96 max-w-full cursor-text items-center justify-start gap-2 rounded bg-white px-4 py-2 shadow-lg transition-[outline] focus-within:outline dark:bg-blue dark:text-white sm:px-6 sm:py-4"
      >
        <label htmlFor="search-input">
          <img
            src={searchIcon}
            alt="Search lens icon"
            className="w-5 cursor-text text-darkGray"
          />
        </label>
        <input
          autoComplete="off"
          ref={searchRef}
          value={props.searchParams.get("searchTerm")}
          onChange={handleChange}
          name="searchTerm"
          type="search"
          id="search-input"
          placeholder="Search for a country..."
          className="max-w-full grow bg-inherit font-semibold outline-none"
        />
      </div>
      <div className="ml-5 flex items-center gap-5">
        <label htmlFor="region-filter" className="font-semibold">
          Filter by Region
        </label>
        <select
          id="region-filter"
          value={props.searchParams.get("region")}
          onChange={handleChange}
          name="region"
          className="rounded bg-white px-1 py-2 text-base shadow-none outline-none dark:bg-blue sm:px-2 md:py-4"
        >
          {regions.map((region) => (
            <option
              key={region}
              value={region}
              className="font-semibold text-inherit"
            >
              {region}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  searchParams: PropTypes.shape({
    searchTerm: PropTypes.string,
    region: PropTypes.string,
    get: PropTypes.func,
    set: PropTypes.func,
  }).isRequired,
  setSearchParams: PropTypes.func.isRequired,
};
