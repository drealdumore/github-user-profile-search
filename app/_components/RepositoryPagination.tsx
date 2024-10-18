"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface RepositoryPaginationProps {
  page: number;
  setPage: (page: number | any) => void;
  repositoriesCount: number;
  itemsPerPage: number;
}

const RepositoryPagination = ({
  page,
  setPage,
  repositoriesCount,
  itemsPerPage,
}: RepositoryPaginationProps) => {
  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "next") {
      setPage((prev: number) => prev + 1);
    } else {
      setPage((prev: number) => Math.max(prev - 1, 1));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => handlePageChange("prev")}
        disabled={page === 1}
        className={`mr-2 px-4 py-2 rounded-md disabled:pointer-events-none disabled:cursor-not-allowed ${
          page === 1
            ? "bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => handlePageChange("next")}
        disabled={repositoriesCount < itemsPerPage}
        className={`px-4 py-2 rounded-md disabled:pointer-events-none disabled:cursor-not-allowed ${
          repositoriesCount < itemsPerPage
            ? "bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RepositoryPagination;
