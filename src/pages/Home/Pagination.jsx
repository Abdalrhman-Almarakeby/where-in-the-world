import PropTypes from "prop-types";

export default function Pagination({ nPages, currentPage, onPageChange }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  function getPaginationNumbers(numberOfPages) {
    function addButton(number) {
      return (
        <li key={number}>
          <button onClick={() => onPageChange(number)} className="page-link">
            {number}
          </button>
        </li>
      );
    }

    let numbers = [];
    if (numberOfPages <= 6) {
      for (let i = 0; i < numberOfPages; i++) {
        numbers.push(addButton(i + 1));
      }
    } else {
      numbers.push(addButton(1));

      if (currentPage > 3) {
        console.log(1);
        numbers.push(<span>...</span>);
      }

      if (currentPage == numberOfPages) {
        console.log(2);
        numbers.push(addButton(currentPage - 2));
      }

      if (currentPage > 2) {
        console.log(3);
        numbers.push(addButton(currentPage - 1));
      }

      if (currentPage != 1 && currentPage != numberOfPages) {
        console.log(4);

        numbers.push(addButton(currentPage));
      }

      if (currentPage < numberOfPages - 1) {
        console.log(5);
        numbers.push(addButton(currentPage + 1));
      }

      if (currentPage == 1) {
        console.log(6);
        numbers.push(addButton(currentPage + 2));
      }

      if (currentPage < numberOfPages - 2) {
        console.log(7);
        numbers.push("...");
      }

      numbers.push(addButton(numberOfPages));
    }
    return numbers;
  }

  const goToNextPage = () => {
    if (currentPage !== nPages) {
      onPageChange(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };
  console.log(getPaginationNumbers(pageNumbers));
  return (
    <nav className="flex justify-evenly">
      <button className="" onClick={goToPrevPage}>
        Previous
      </button>
      <ul className="flex justify-center text-darkBlue dark:text-white">
        {getPaginationNumbers(pageNumbers.pop())}
        <li className="page-item"></li>
      </ul>
      <button className="page-link" onClick={goToNextPage}>
        Next
      </button>
    </nav>
  );
}

Pagination.propTypes = {
  nPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
