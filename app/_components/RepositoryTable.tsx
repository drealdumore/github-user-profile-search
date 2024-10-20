"use client";

import React from "react";
import { GitFork, Star } from "lucide-react";
import Github from "./Github";
import { RepositoryTableProps } from "../_types/types";

const RepositoryTable: React.FC<RepositoryTableProps> = ({ repositories }) => {
  return (
    <>
      {repositories.map((repo) => (
        <div key={repo.id}>
          <h3 className="text-lg font-medium mb-2 text-text">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-[#333333] hover:underline dark:text-text dark:hover:text-foreground transition-colors"
            >
              {repo.name}
            </a>
          </h3>

          <div className="flex items-center mb-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#f2f2f2cc] dark:bg-[#1a1a1a] rounded-full p-1.5 text-sm"
            >
              <Github aria-label="github" />
              <span className="ml-2 text-xs font-medium font-mono text-link-text line-clamp-1">
                {repo.owner.login}/{repo.name}
              </span>
            </a>
          </div>

          <p className="mt-2 text-xs text-muted-text mb-4 line-clamp-2 overflow-hidden">
            {repo.description}
          </p>

          <div className="flex justify-between items-center text-sm  text-muted-text/80 hover:text-text ">
          <div className="flex gap-4">

            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center">
              <GitFork className="w-4 h-4 mr-1  text-muted-text/80 hover:text-text " />
              {repo.forks_count}
            </span>
          </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RepositoryTable;
