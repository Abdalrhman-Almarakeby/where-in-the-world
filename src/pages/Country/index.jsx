import { Loading } from "@/components/Loading";
import { useCountry } from "@/hooks/useCountry";
import { scrollToTop } from "@/lib/scrollToTop";
import { ErrorPage } from "@/pages/Error";
import { countriesCode } from "@/utils/countriesCode";
import { useEffect } from "react";
import { useParams } from "react-router";
import { BackBtn } from "./BackBtn";
import { CountryDetails } from "./CountryDetails";

export function Country() {
	const { name } = useParams();
	const { data, error, isLoading } = useCountry(name);

	// biome-ignore lint/correctness/useExhaustiveDependencies: It needs to scroll to the top every time the name changes
	useEffect(() => {
		scrollToTop();
	}, [name]);

	return countriesCode[name] ? (
		<main className="container flex grow flex-col px-6 py-10 text-dark-blue dark:text-white">
			{isLoading && <Loading />}
			{error && <div>{error.message}</div>}
			{data && (
				<>
					<BackBtn />
					<CountryDetails {...data} />
				</>
			)}
		</main>
	) : (
		<ErrorPage />
	);
}
