import RepositoryTable from "./RepositoryTable";

import UserProfile from "./UserProfile";
import RepositoryPagination from "./RepositoryPagination";
import Loader from "./loader";
import ErrorMessage from "./error";

interface MainContentProps {
  userData: any;
  loading: boolean;
  error: string;
  repositories: any[];
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
}

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
        <>
          <h3 className="text-lg font-semibold">Repositories:</h3>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-4 [&>*]:before:absolute [&>*]:before:bg-[#e5e7eb]/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-[#e5e7eb]/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            <RepositoryTable repositories={repositories} />
          </div>

          <RepositoryPagination
            page={page}
            setPage={setPage}
            repositoriesCount={repositories.length}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default MainContent;
