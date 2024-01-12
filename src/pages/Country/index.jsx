import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import BackBtn from "./BackBtn";
import CountryDetails from "./CountryDetails";
import getUrl from "../../utils/getUrl";

export default function Country() {
  const { name } = useParams();
  const { data, isPending, error } = useFetch(getUrl(name));

  return (
    <section className="flex flex-grow flex-col px-6 py-10 dark:bg-darkBlue">
      <div className="container">
        {isPending && <Loading />}
        {error && <div>{error}</div>}
        {data && (
          <>
            <BackBtn />
            <CountryDetails {...data} />
          </>
        )}
      </div>
    </section>
  );
}
