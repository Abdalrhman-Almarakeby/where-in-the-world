import { BackBtn } from "@/components/Country/BackBtn";
import { CountryDetails } from "@/components/Country/CountryDetails";
import { NotFound } from "@/components/Error/NotFound";
import { Loading } from "@/components/Loading";
import { useCountry } from "@/hooks/useCountry";
import { scrollToTop } from "@/lib/scrollToTop";
import { countriesCode } from "@/utils/countriesCode";
import { useEffect } from "react";
import { useParams } from "react-router";

export function Country() {
	const { name } = useParams();

	if (countriesCode[name] === undefined) {
		return <NotFound />;
	}

	const { data } = useCountry(name);

	// biome-ignore lint/correctness/useExhaustiveDependencies: It needs to scroll to the top every time the name changes
	useEffect(() => {
		scrollToTop();
	}, [name]);

	return (
		<main className="container flex grow flex-col px-6 py-10 text-dark-blue dark:text-white">
			{!data && <Loading />}
			{data && (
				<>
					<BackBtn />
					<CountryDetails {...data} />
				</>
			)}
		</main>
	);
}
