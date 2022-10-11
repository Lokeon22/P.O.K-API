import React from "react";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="text-white text-2xl">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className={index === currentPage ? "text-violet-500" : null}
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
