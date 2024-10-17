"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "next-themes";
import { Search, Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import RepositoryList from "./_components/RepositoryList";

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [repositories, setRepositories] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  // Fetch GitHub user data and repositories
  const fetchUserData = async (user: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(response.data);
      fetchRepositories(user, 1); // Reset to page 1 when fetching a new user
    } catch (err) {
      setError("User not found or API request failed.");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch repositories with pagination
  const fetchRepositories = async (user: string, page: number) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=30&page=${page}`
      );
      setRepositories(response.data);
    } catch (err) {
      setError("Failed to load repositories.");
    }
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) fetchUserData(username);
  };

  // Re-fetch repositories when the page changes
  useEffect(() => {
    if (userData) fetchRepositories(username, page);
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>

      <h1 className="text-3xl font-bold mb-4">GitHub User Profile Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center max-w-md mx-auto">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-grow px-4 py-2 rounded-l-md border-2 border-r-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-neutral-500 text-white rounded-r-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Loading Spinner */}
      {loading && (
        <div
          className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-black"
          role="status"
          aria-label="Loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* User Data Display */}
      {userData && (
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src={userData.avatar_url}
              alt={userData.login}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold">{userData.login}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                @{userData.login}
              </p>
              <p className="mt-2">{userData.bio}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {userData.location}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {userData.public_repos} public repositories
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Repository List */}
      <RepositoryList repositories={repositories} />

      {/* Pagination Controls */}
      {repositories.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={repositories.length < 30}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
