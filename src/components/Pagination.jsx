import React from "react";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center px-4 sm:px-0">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className={index === currentPage ? " text-yellow-500 dark:text-yellow-600" : "text-white dark:text-black hover:text-blue-500 dark:hover:text-blue-800"}
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
