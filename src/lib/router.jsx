import { RootErrorBoundary } from "@/pages/RootErrorBoundary";
import { RootLayout } from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <RootErrorBoundary />,
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
