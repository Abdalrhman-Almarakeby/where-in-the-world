import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { Layout } from "@/pages/Layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				lazy: async () => {
					const { Home } = await import("@/pages/Home");
					return { Component: Home };
				},
			},
			{
				path: "country/:name",
				lazy: async () => {
					const { Country } = await import("@/pages/Country");
					return { Component: Country };
				},
			},
		],
	},
]);
