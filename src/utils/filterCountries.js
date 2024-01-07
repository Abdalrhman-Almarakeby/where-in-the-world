function filterByRegion(countries, region) {
  return countries.filter((country) => {
    const searchRegion = region ?? "All";
    return searchRegion === "All" || country.region === searchRegion;
  });
}

function filterBySearchTerm(countries, term) {
  const search = term.toLowerCase() ?? "";

  return countries?.filter((country) => {
    return (
      country.name.common?.toLowerCase().includes(search) ||
      country.name.official?.toLowerCase().includes(search) ||
      country.capital?.toString().toLowerCase().includes(search)
    );
  });
}

export default function filterCountries(countries, filters) {
  const { region, search } = filters;

  let filtered = countries;
  filtered = filtered.filter((country) => country.name.common !== "Israel");
  filtered = filterByRegion(filtered, region);
  filtered = filterBySearchTerm(filtered, search);

  return filtered;
}
