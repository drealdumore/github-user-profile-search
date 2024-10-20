"use client";

import { useState, useCallback } from "react";
import axios from "axios";
import SearchBar from "./_components/SearchBar";
import MainContent from "./_components/MainContent";
import Header from "./_components/Header";
import { Repository, UserProfile } from "./_types/types";

const ITEMS_PER_PAGE = 30;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const RATE_LIMIT_ERROR_MESSAGE = "API rate limit exceeded for";

const Home = () => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRepositories = useCallback(async (user: string, page: number) => {
    try {
      const { data } = await axios.get<Repository[]>(
        `https://api.github.com/users/${user}/repos?per_page=${ITEMS_PER_PAGE}&page=${page}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      console.log(data);

      setRepositories(data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorResponse = err.response?.data as { message: string };
        if (errorResponse.message.includes(RATE_LIMIT_ERROR_MESSAGE)) {
          setError(
            "You've hit the API rate limit. Please wait a moment and try again soon."
          );
        } else {
          setError("Failed to load repositories.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  }, []);

  const fetchUserData = useCallback(
    async (user: string) => {
      setLoading(true);
      setError("");
      setRepositories([]);
      try {
        const { data } = await axios.get<UserProfile>(
          `https://api.github.com/users/${user}`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          }
        );
        setUserData(data);
        await fetchRepositories(user, 1);
        setPage(1);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const errorResponse = err.response?.data as { message: string };
          if (errorResponse.message === "Not Found") {
            setError(
              "User not found. Please check the username and try again."
            );
          } else if (errorResponse.message.includes(RATE_LIMIT_ERROR_MESSAGE)) {
            setError(
              "You've hit the API rate limit. Please wait a moment and try again soon."
            );
          } else {
            setError("User not found or API request failed.");
          }
          setUserData(null);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    },
    [fetchRepositories]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      fetchUserData(username);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (userData && newPage > 0) {
      fetchRepositories(username, newPage);
      setPage(newPage);
    }
  };

  return (
    <div className="main">
      <Header />

      <div
        className={`flex items-center justify-center transition-all duration-500 ease-in-out ${
          userData ? `h-full` : `h-[65vh]`
        }`}
      >
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-2xl font-semibold mb-3 text-black dark:text-white md:text-4xl text-center">
            GitHub User Profile Search
          </h1>

          <SearchBar
            username={username}
            setUsername={setUsername}
            handleSearch={handleSearch}
          />
        </div>
      </div>

      <MainContent
        userData={userData}
        loading={loading}
        error={error}
        repositories={repositories}
        page={page}
        setPage={handlePageChange}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default Home;
