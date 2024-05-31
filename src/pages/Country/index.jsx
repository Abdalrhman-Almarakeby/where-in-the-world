import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { scrollToTop } from "../../utils/scrollToTop";
import { getUrl } from "../../utils/getUrl";
import { countriesCode } from "../../utils/countriesCode.js";
import { CountryDetails } from "./CountryDetails";
import { BackBtn } from "./BackBtn";
import { Error } from "../Error.jsx";

export function Country() {
  const { name } = useParams();
  const { data, isPending, error } = useFetch(getUrl(name));

  useEffect(() => {
    scrollToTop();
  }, [name]);

  return countriesCode[name] ? (
    <main className="flex flex-grow flex-col px-6 py-10 dark:bg-darkBlue">
      <div className="container">
        {isPending && <Loading />}
        {error && <div className="text-darkBlue dark:text-white">{error}</div>}
        {data && (
          <>
            <BackBtn />
            <CountryDetails {...data} />
          </>
        )}
      </div>
    </main>
  ) : (
    <Error />
  );
}
