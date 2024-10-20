"use client";

import RepositoryTable from "./RepositoryTable";

import UserProfile from "./UserProfile";
import RepositoryPagination from "./RepositoryPagination";
import Loader from "./Loader";
import ErrorMessage from "./Error";
import { MainContentProps } from "../_types/types";

const MainContent = ({
  userData,
  loading,
  error,
  repositories,
  page,
  setPage,
  itemsPerPage,
}: MainContentProps) => {
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {userData && <UserProfile userData={userData} />}
      {repositories.length > 0 && (
        <div className="flex flex-col gap-54md:gap-8 items-center justify-center">
          <h3 className="text-2xl font-semibold self-start sm:self-center sm:pb-4">Repositories:</h3>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-4 [&>*]:before:absolute [&>*]:before:bg-[#e5e7eb]/70 [&>*]:before:dark:bg-[#333333]/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-[#e5e7eb]/70 [&>*]:after:dark:bg-[#333333]/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            <RepositoryTable repositories={repositories} />
          </div>

          <RepositoryPagination
            page={page}
            setPage={setPage}
            repositoriesCount={repositories.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
