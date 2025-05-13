import { Country } from "@/pages/Country";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { Home } from "@/pages/Home";
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
				element: <Home />,
			},
			{
				path: "country/:name",
				element: <Country />,
			},
		],
	},
]);
