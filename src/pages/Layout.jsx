import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Outlet } from "react-router";

export function Layout() {
	return (
		<div className="flex min-h-[100svh] flex-col dark:bg-dark-blue">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
