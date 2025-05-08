import { router } from "@/lib/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import "./styles.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
		},
	},
});

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
