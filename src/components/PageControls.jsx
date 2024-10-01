import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate the number of pages required
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* Previous Page Button */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}

        {/* Next Page Button */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
