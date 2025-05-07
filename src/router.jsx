import { Footer } from "@/components/Footer.jsx";
import { Header } from "@/components/Header";
import { Country } from "@/pages/Country/index";
import { ErrorPage } from "@/pages/Error";
import { Home } from "@/pages/Home/index";
import { Outlet, createBrowserRouter } from "react-router";

const Root = () => {
	return (
		<div className="flex min-h-[100svh] flex-col">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export const router = createBrowserRouter([
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
