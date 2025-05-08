import { Footer } from "@/components/Footer";
import { GeneralError } from "@/components/GeneralError";
import { Header } from "@/components/Header";
import { NotFound } from "@/components/NotFound";
import { isRouteErrorResponse, useRouteError } from "react-router";

export function RootErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error) && error.status === 404) {
		return <NotFound />;
	}

	return (
		<div className="flex min-h-[100svh] flex-col dark:bg-dark-blue">
			<Header />
			<GeneralError />
			<Footer />
		</div>
	);
}
