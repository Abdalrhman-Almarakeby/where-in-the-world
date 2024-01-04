import { useRef } from "react";
import PropTypes from "prop-types";
import searchIcon from "../assets/icons/search-lens.svg";

export default function SearchBar(props) {
  const searchRef = useRef();
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

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
          ref={searchRef}
          value={props.searchTerm.search}
          onChange={(e) =>
            props.setSearchTerm({ ...props.searchTerm, search: e.target.value })
          }
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
          value={props.searchTerm.region}
          onChange={(e) =>
            props.setSearchTerm({ ...props.searchTerm, region: e.target.value })
          }
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
  searchTerm: PropTypes.shape({
    search: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
