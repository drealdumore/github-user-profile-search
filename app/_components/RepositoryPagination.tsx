"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { RepositoryPaginationProps } from "../_types/types";

const RepositoryPagination = ({
  page,
  setPage,
  repositoriesCount,
  itemsPerPage,
}: RepositoryPaginationProps) => {
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const isPrevDisabled = page === 1;
  const isNextDisabled = repositoriesCount < itemsPerPage;

  const buttonStyle =
    "mr-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-[#111111] dark:hover:bg-[#111111]/50 disabled:pointer-events-none disabled:cursor-not-allowed";

  return (
    <div className="flex justify-center mt-8">
      {!isPrevDisabled && (
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={isPrevDisabled}
          className={`${buttonStyle} ${isPrevDisabled ? "opacity-50" : ""}`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {!isNextDisabled && (
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={isNextDisabled}
          className={`${buttonStyle} ${isNextDisabled ? "opacity-50" : ""}`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default RepositoryPagination;
