import { usePagination } from "@/hooks/usePagination";
import PropTypes from "prop-types";

export function Pagination({ nPages, currentPage, setSearchParams }) {
	const {
		goToNextPage,
		goToPrevPage,
		getPaginationElements,
		handlePageChange,
	} = usePagination({ nPages, currentPage, setSearchParams });

	const renderPaginationNumbers = () => {
		const elements = getPaginationElements();

		return elements.map((element) => {
			if (element.type === "ellipsis") {
				return <li key={element.key}>...</li>;
			}

			return (
				<li
					key={element.number}
					className={`font-bold dark:font-normal px-2 py-1 cursor-pointer rounded ${
						element.isActive
							? "bg-blue text-white dark:bg-white font-extrabold dark:text-very-dark-blue"
							: ""
					}`}
				>
					<button
						type="button"
						role="link"
						aria-label={`Go to page number ${element.number} of countries`}
						onClick={() => handlePageChange(element.number)}
						className="cursor-pointer"
					>
						{element.number}
					</button>
				</li>
			);
		});
	};

	return (
		<nav
			aria-label="Pagination"
			className="mt-10 flex items-center justify-between text-xs sm:justify-center sm:gap-10"
		>
			<button
				type="button"
				aria-label="Go to previous page of countries"
				role="link"
				className="rounded-sm px-2 py-1 cursor-pointer font-extrabold enabled:bg-blue enabled:text-white disabled:cursor-not-allowed disabled:bg-dark-gray disabled:font-light disabled:text-light-gray dark:font-bold"
				onClick={goToPrevPage}
				disabled={currentPage === 1}
				aria-disabled={currentPage === 1}
			>
				Previous
			</button>
			<ul className="flex justify-center gap-2 text-dark-blue dark:text-white">
				{renderPaginationNumbers()}
			</ul>
			<button
				type="button"
				aria-label="Go to next page"
				role="link"
				className="rounded-sm px-2 py-1 cursor-pointer font-extrabold enabled:bg-blue enabled:text-white disabled:cursor-not-allowed disabled:bg-dark-gray disabled:font-light disabled:text-light-gray dark:font-bold"
				onClick={goToNextPage}
				disabled={currentPage === nPages}
				aria-disabled={currentPage === nPages}
			>
				Next
			</button>
		</nav>
	);
}

Pagination.propTypes = {
	nPages: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	setSearchParams: PropTypes.func.isRequired,
};
