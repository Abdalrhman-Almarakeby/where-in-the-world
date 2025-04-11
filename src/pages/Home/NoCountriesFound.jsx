export function NoCountriesFound() {
	return (
		<>
			<p
				className="px-6 pb-4 pt-10 text-center text-2xl font-bold capitalize text-veryDarkBlue dark:text-white"
				aria-live="polite"
			>
				No countries found
			</p>
			<p className="text-center text-darkGray">
				Try respelling the search term
			</p>
		</>
	);
}
