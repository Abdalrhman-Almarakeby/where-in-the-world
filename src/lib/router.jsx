import { ErrorPage } from "@/pages/Error";
import { Layout } from "@/pages/Layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
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
