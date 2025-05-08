import { LoaderCircle } from "lucide-react";

export function Loading() {
	return (
		<div
			className="flex items-center justify-center grow"
			aria-live="polite"
			aria-label="Loading"
		>
			<LoaderCircle className="size-24 animate-spin" />
		</div>
	);
}
