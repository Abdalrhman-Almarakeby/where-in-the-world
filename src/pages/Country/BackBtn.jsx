import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function BackBtn() {
	const navigate = useNavigate();

	return (
		<button
			type="button"
			onClick={() => {
				navigate(-1);
			}}
			className="flex w-fit items-center gap-4 rounded-sm px-4 py-2 text-sm text-dark-blue shadow-lg focus-visible:outline focus-visible:outline-dark-blue dark:bg-blue dark:text-white dark:focus-visible:outline-white sm:px-6"
			aria-label="Go back"
		>
			<ArrowLeft className="size-4" aria-hidden="true" />
			<span className="md:text-lg">Back</span>
		</button>
	);
}
