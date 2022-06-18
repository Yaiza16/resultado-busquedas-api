/* eslint-disable react/jsx-curly-newline */
import { useState } from 'react'

function Pagination() {
  const numberOfPages = [1, 2, 3, 4, 5]
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="pagination-container">
      <div className="pagination-item-container">
        {currentPage !== 1 && (
          <button
            type="button"
            className="page-item arrow-item arrow-item--left"
            onClick={() =>
              setCurrentPage((oldCurrentPage) => oldCurrentPage - 1)
            }
          >
            <span>&#8592;</span>
          </button>
        )}
        {numberOfPages.map((page) => (
          <button
            type="button"
            key={page}
            className={
              page === currentPage ? 'page-item page-item--active' : 'page-item'
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        {currentPage !== numberOfPages.length && (
          <button
            type="button"
            className="page-item arrow-item arrow-item--right"
            onClick={() =>
              setCurrentPage((oldCurrentPage) => oldCurrentPage + 1)
            }
          >
            <span>&#8594;</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
