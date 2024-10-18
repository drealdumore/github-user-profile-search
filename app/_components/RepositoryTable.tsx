import React from "react";
import { GitFork, Star } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
  };
}

interface RepositoryTableProps {
  repositories: Repository[];
}

const RepositoryTable: React.FC<RepositoryTableProps> = ({ repositories }) => {
  return (
    <>
      {/* <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-4 [&>*]:before:absolute [&>*]:before:bg-[#e5e7eb]/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-[#e5e7eb]/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"> */}
      {repositories.map((repo) => (
        <div key={repo.id}>
          <h3 className="text-lg font-semibold mb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {repo.name}
            </a>
          </h3>

          {/* GitHub repo owner and name */}
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-gray-200 rounded-full p-1.5 text-sm">
              <svg
                aria-label="github"
                height="16"
                viewBox="0 0 14 14"
                width="16"
              >
                <path
                  d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                  fill="var(--geist-foreground)"
                  fillRule="nonzero"
                ></path>
              </svg>
              <span className="ml-2 text-xs font-medium font-mono text-black dark:text-white">
                {repo.owner.login}/{repo.name}
              </span>
            </div>
          </div>

          {/* Truncated description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 overflow-hidden">
            {repo.description}
          </p>

          {/* Fork and star info */}
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center">
              <GitFork className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
              {repo.forks_count}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default RepositoryTable;
