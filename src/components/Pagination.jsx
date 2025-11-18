import React from "react";
import "../styles/Pagination.css";

export default function Pager({ page, pages, setPage }) {
  
  // function to show limited page numbers with ellipsis
  const getPageNumbers = () => {
    const visible = [];

    if (pages <= 7) {
      for (let i = 1; i <= pages; i++) visible.push(i);
      return visible;
    }

    if (page <= 3) return [1, 2, 3, 4, "...", pages];
    if (page >= pages - 2) return [1, "...", pages - 3, pages - 2, pages - 1, pages];

    return [1, "...", page - 1, page, page + 1, "...", pages];
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination-wrapper">
      <div className="pagination-container">

        {/* Prev Arrow */}
        <button
          className="page-btn arrow"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ‹
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((num, idx) => (
          <button
            key={idx}
            className={`page-btn ${num === page ? "active" : ""} ${num === "..." ? "dots" : ""}`}
            onClick={() => num !== "..." && setPage(num)}
            disabled={num === "..."}
          >
            {num}
          </button>
        ))}

        {/* Next Arrow */}
        <button
          className="page-btn arrow"
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          ›
        </button>

      </div>
    </div>
  );
}
