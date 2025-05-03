import { scrollToTop } from "@/utils/scrollToTop";
import PropTypes from "prop-types";

export function Pagination({ nPages, currentPage, setSearchParams }) {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	function handlePageChange(page) {
		scrollToTop();
		setSearchParams(
			(prev) => {
				prev.set("page", page);
				return prev;
			},
			{ replace: true },
		);
	}

	function getPaginationNumbers(numberOfPages) {
		function addButton(number) {
			return (
				<li
					key={number}
					className={`font-bold dark:font-normal px-2 py-1 rounded ${
						number === currentPage
							? "bg-blue text-white  dark:bg-white font-extrabold  dark:text-very-dark-blue"
							: ""
					}`}
				>
					<button
						type="button"
						role="link"
						aria-label={`Go to page number ${number} of countries`}
						onClick={() => handlePageChange(number)}
						className=""
					>
						{number}
					</button>
				</li>
			);
		}

		function addDots(key) {
			return <li key={key}>...</li>;
		}

		const numbers = [];
		if (numberOfPages <= 6) {
			for (let i = 1; i < numberOfPages; i++) {
				numbers.push(addButton(i));
			}
		} else {
			numbers.push(addButton(1));

			if (currentPage > 3) numbers.push(addDots("A"));

			if (currentPage === numberOfPages)
				numbers.push(addButton(currentPage - 2));

			if (currentPage > 2) numbers.push(addButton(currentPage - 1));

			if (currentPage !== 1 && currentPage !== numberOfPages)
				numbers.push(addButton(currentPage));

			if (currentPage < numberOfPages - 1)
				numbers.push(addButton(currentPage + 1));

			if (currentPage === 1) numbers.push(addButton(currentPage + 2));

			if (currentPage < numberOfPages - 2) numbers.push(addDots("B"));
		}

		numbers.push(addButton(numberOfPages));

		return numbers;
	}

	function goToNextPage() {
		if (currentPage !== nPages) {
			handlePageChange(currentPage + 1);
		}
	}

	function goToPrevPage() {
		if (currentPage !== 1) {
			handlePageChange(currentPage - 1);
		}
	}

	return (
		<nav
			aria-label="Pagination"
			className="mt-10 flex items-center justify-between text-xs sm:justify-center sm:gap-10"
		>
			<button
				type="button"
				aria-label="Go to previous page of countries"
				role="link"
				className="rounded-sm px-2 py-1 font-extrabold enabled:bg-blue enabled:text-white disabled:cursor-not-allowed disabled:bg-dark-gray disabled:font-light disabled:text-light-gray dark:font-bold"
				onClick={goToPrevPage}
				disabled={currentPage === 1}
				aria-disabled={currentPage === 1}
			>
				Previous
			</button>
			<ul className="flex justify-center gap-2 text-dark-blue dark:text-white">
				{getPaginationNumbers(pageNumbers.pop())}
			</ul>
			<button
				type="button"
				aria-label="Go to next page"
				role="link"
				className="rounded-sm px-2 py-1 font-extrabold enabled:bg-blue enabled:text-white disabled:cursor-not-allowed disabled:bg-dark-gray disabled:font-light disabled:text-light-gray dark:font-bold"
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
