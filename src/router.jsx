import { Country } from "@/pages/Country";
import { ErrorPage } from "@/pages/Error";
import { Home } from "@/pages/Home";
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
				element: <Home />,
			},
			{
				path: "country/:name",
				element: <Country />,
			},
		],
	},
]);
