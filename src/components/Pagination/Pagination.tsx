import React, { FC, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: Function;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="h-[17%] flex justify-center items-center gap-6 pt-5">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Précédent
      </button>
      <span className="text-lg font-medium text-gray-700">
        Page {currentPage} sur {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="bg-blue-400 hover:bg-blue-500 text-white font-semibold  px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
