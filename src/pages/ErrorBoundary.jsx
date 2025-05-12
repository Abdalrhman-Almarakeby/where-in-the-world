import { GeneralError } from "@/components/Error/GeneralError";
import { NotFound } from "@/components/Error/NotFound";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { isRouteErrorResponse, useRouteError } from "react-router";

export function ErrorBoundary() {
	const error = useRouteError();

	return (
		<div className="flex min-h-[100svh] flex-col dark:bg-dark-blue">
			<Header />
			{isRouteErrorResponse(error) && error.status === 404 ? (
				<NotFound />
			) : (
				<GeneralError />
			)}
			<Footer />
		</div>
	);
}
