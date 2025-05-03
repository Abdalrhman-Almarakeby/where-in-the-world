import { useEffect } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { countriesCode } from "../../utils/countriesCode.js";
import { getUrl } from "../../utils/getUrl";
import { scrollToTop } from "../../utils/scrollToTop";
import { ErrorPage } from "../Error.jsx";
import { BackBtn } from "./BackBtn";
import { CountryDetails } from "./CountryDetails";

export function Country() {
	const { name } = useParams();
	const { data, isPending, error } = useFetch(getUrl(name));

	// biome-ignore lint/correctness/useExhaustiveDependencies: It needs to scroll to the top every time the name changes
	useEffect(() => {
		scrollToTop();
	}, [name]);

	return countriesCode[name] ? (
		<main className="flex grow flex-col px-6 py-10 dark:bg-dark-blue">
			<div className="container">
				{isPending && <Loading />}
				{error && <div className="text-dark-blue dark:text-white">{error}</div>}
				{data && (
					<>
						<BackBtn />
						<CountryDetails {...data} />
					</>
				)}
			</div>
		</main>
	) : (
		<ErrorPage />
	);
}
