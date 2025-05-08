import { queryClient } from "@/lib/queryClient";
import { router } from "@/lib/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import "./styles.css";

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
