import { useEffect } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { countriesCode } from "../../utils/countriesCode.js";
import { getUrl } from "../../utils/getUrl";
import { scrollToTop } from "../../utils/scrollToTop";
import { Error } from "../Error.jsx";
import { BackBtn } from "./BackBtn";
import { CountryDetails } from "./CountryDetails";

export function Country() {
	const { name } = useParams();
	const { data, isPending, error } = useFetch(getUrl(name));

	useEffect(() => {
		scrollToTop();
	}, [name]);

	return countriesCode[name] ? (
		<main className="flex grow flex-col px-6 py-10 dark:bg-darkBlue">
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
