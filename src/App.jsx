import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import "@/styles.css";

import { Footer } from "@/components/Footer.jsx";
import { Header } from "@/components/Header";
import { Country } from "@/pages/Country/index";
import { ErrorPage } from "@/pages/Error";
import { Home } from "@/pages/Home/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Root layout componenimport { createRoot } from "react-dom/client";

const Root = () => {
	return (
		<div className="flex min-h-[100svh] flex-col">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

// Create router with loader functions
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
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

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
