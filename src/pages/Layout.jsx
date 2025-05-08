import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
