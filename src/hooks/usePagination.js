import { scrollToTop } from "@/lib/scrollToTop";

/**
 * Custom hook to handle pagination logic
 * @param {object} params - Parameters for pagination
 * @param {number} params.nPages - Total number of pages
 * @param {number} params.currentPage - Current active page
 * @param {import("react-router").SetURLSearchParams} params.setSearchParams - Function to update URL search params
 * @returns {object} - Pagination properties and handlers
 */
export function usePagination({ nPages, currentPage, setSearchParams }) {
	// Generate array of page numbers
	const pageNumbers = Array.from({ length: nPages }, (_, i) => i + 1);

	/**
	 * Handles page change and updates URL params
	 * @param {number} page - Page number to navigate to
	 */
	function handlePageChange(page) {
		scrollToTop();
		setSearchParams(
			(prev) => {
				prev.set("page", page.toString());
				return prev;
			},
			{ replace: true },
		);
	}

	/**
	 * Navigate to next page if not on last page
	 */
	function goToNextPage() {
		if (currentPage !== nPages) {
			handlePageChange(currentPage + 1);
		}
	}

	/**
	 * Navigate to previous page if not on first page
	 */
	function goToPrevPage() {
		if (currentPage !== 1) {
			handlePageChange(currentPage - 1);
		}
	}

	/**
	 * Generates the pagination number elements with logic for ellipsis
	 * @returns {Array<{ type: 'button', number: number, isActive: boolean } | { type: 'ellipsis', key: string }>} Array of page number elements
	 */
	function getPaginationElements() {
		const numberOfPages = pageNumbers[pageNumbers.length - 1];

		const elements = [];

		/**
		 * Helper to add a button to the elements array
		 *
		 * @param {number} number
		 * @returns {{ type: 'button', number: number, isActive: boolean }}
		 */
		function addButton(number) {
			return {
				type: "button",
				number,
				isActive: number === currentPage,
			};
		}

		/**
		 * Helper to add ellipsis to the elements array
		 *
		 * @param {string} key
		 * @returns {{ type: 'ellipsis', key: string }}
		 */
		function addEllipsis(key) {
			return {
				type: "ellipsis",
				key,
			};
		}

		// Simple case: 6 or fewer pages
		if (numberOfPages <= 6) {
			for (let i = 1; i <= numberOfPages; i++) {
				elements.push(addButton(i));
			}
		} else {
			// Complex case: more than 6 pages
			// Always add page 1
			elements.push(addButton(1));

			// Add dots if current page is more than 3
			if (currentPage > 3) {
				elements.push(addEllipsis("start"));
			}

			// Special case for last page
			if (currentPage === numberOfPages) {
				elements.push(addButton(currentPage - 2));
			}

			// Add previous page if not on first page
			if (currentPage > 2) {
				elements.push(addButton(currentPage - 1));
			}

			// Add current page if not first or last
			if (currentPage !== 1 && currentPage !== numberOfPages) {
				elements.push(addButton(currentPage));
			}

			// Add next page if not on last page
			if (currentPage < numberOfPages - 1) {
				elements.push(addButton(currentPage + 1));
			}

			// Special case for first page
			if (currentPage === 1) {
				elements.push(addButton(currentPage + 2));
			}

			// Add dots if current page is less than numberOfPages - 2
			if (currentPage < numberOfPages - 2) {
				elements.push(addEllipsis("end"));
			}

			// Always add last page
			elements.push(addButton(numberOfPages));
		}

		return elements;
	}

	return {
		pageNumbers,
		handlePageChange,
		goToNextPage,
		goToPrevPage,
		getPaginationElements,
		currentPage,
		nPages,
	};
}
