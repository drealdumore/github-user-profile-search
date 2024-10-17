import { GitFork, Star } from "lucide-react";
import React from "react";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Repositories:</h3>
      {/* <ul>
        {repositories.map((repo) => (
          <li key={repo.id} className="border-b py-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </p>
          </li>
        ))}
      </ul> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
          >
            <h3 className="text-lg font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {repo.description}
            </p>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center">
                <GitFork className="w-4 h-4 mr-1" />
                {repo.forks_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
