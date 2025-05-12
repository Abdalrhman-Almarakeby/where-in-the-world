import { Link } from "react-router";

export function GeneralError() {
	return (
		<section className="px-5 flex grow flex-col items-center justify-center gap-8 dark:bg-dark-blue dark:text-white">
			<h1 className="text-center text-5xl font-extrabold">Error</h1>
			<p className="text-center text-2xl font-semibold">
				Sorry, something went wrong. Please try again later.
			</p>
			<Link
				to="/"
				className="text-center text-2xl font-semibold hover:underline"
			>
				Back to Home
			</Link>
		</section>
	);
}
