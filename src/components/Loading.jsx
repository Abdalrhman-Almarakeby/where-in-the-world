import { LoaderCircle } from "lucide-react";

export function Loading() {
	return (
		<div
			className="flex items-center justify-center pt-20"
			aria-live="polite"
			aria-label="Loading"
		>
			<LoaderCircle className="h-24 w-24 animate-spin" />
		</div>
	);
}
