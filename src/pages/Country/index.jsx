import { Loading } from "@/components/Loading";
import { useCountry } from "@/hooks/useCountry";
import { scrollToTop } from "@/lib/scrollToTop";
import { useEffect } from "react";
import { useParams } from "react-router";
import { BackBtn } from "./BackBtn";
import { CountryDetails } from "./CountryDetails";

export function Country() {
	const { name } = useParams();
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
