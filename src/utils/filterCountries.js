function filterByRegion(countries, region) {
  return countries.filter((country) => {
    const searchRegion = region ?? "All";
    return searchRegion === "All" || country.region === searchRegion;
  });
}

function filterBySearchTerm(countries, term) {
  const search = term.toLowerCase() ?? "";

  return countries?.filter(
    (country) =>
      country.name?.common?.toLowerCase().includes(search) ||
      country.name?.official?.toLowerCase().includes(search) ||
      country.capital?.toString().toLowerCase().includes(search)
  );
}

export default function filterCountries(countries, searchParams) {
  const region = searchParams.get("region");
  const searchTerm = searchParams.get("searchTerm");

  let filtered = countries;
  filtered = filtered.filter((country) => country.name.common !== "Israel");
  filtered = region ? filterByRegion(filtered, region) : filtered;
  filtered = searchTerm ? filterBySearchTerm(filtered, searchTerm) : filtered;

  return filtered;
}
