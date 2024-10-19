"use client";

import { Search } from "lucide-react";
import { SearchBarProps } from "../_types/types";

const SearchBar = ({ username, setUsername, handleSearch }: SearchBarProps) => {
  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex items-center max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex h-9 w-[14rem] md:w-full rounded-lg border border-[#d4d4d8] dark:border-[#333333] px-3 py-2 text-sm shadow-sm placeholder:text-neutral-600 transition-shadow focus-visible:ring-2 placeholder:text-sm font-mono focus-visible:ring-[#a1a1aa]/30 focus-visible:ring-offset-2 focus-visible:border-none"
            id="username"
          />
          <button
            disabled={!username}
            type="submit"
            className="inline-flex items-center rounded-lg border disabled:bg-background dark:border-[#333333] dark:text-[#eaeaea] px-3 text-sm font-medium transition hover:bg-[#d4d4d8]/2 hover:text-foreground dark:hover:bg-[#111111]/50 text-[#333333] dark:disabled:text-[#333333] bg-[#eaeaea] dark:bg-[#333333] dark:disabled:bg-background"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
