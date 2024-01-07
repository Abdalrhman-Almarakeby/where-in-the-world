import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import fromKebabCase from "../utils/fromKebabCase";
import Loading from "../components/Loading";
import BackBtn from "../components/BackBtn";
import CountryDetails from "../components/CountryDetails";

export default function Country() {
  const { name: countryName } = useParams();

  const { data, isPending, error } = useFetch(
    `https://restcountries.com/v3.1/name/${fromKebabCase(countryName)}`
  );

  return (
    <section className="flex flex-grow flex-col px-6 py-10 dark:bg-darkBlue">
      {isPending && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <>
          <BackBtn />
          <CountryDetails {...data[0]} />
        </>
      )}
    </section>
  );
}
