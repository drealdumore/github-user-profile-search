"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "./_components/SearchBar";
import MainContent from "./_components/MainContent";
import Header from "./_components/Header";
import { Repository, UserProfile } from "./_types/types";

const ITEMS_PER_PAGE = 30;

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserProfile | null>(null); 
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchRepositories = useCallback(async (user: string, page: number) => {
    try {
      const { data } = await axios.get<Repository[]>(
        `https://api.github.com/users/${user}/repos?per_page=${ITEMS_PER_PAGE}&page=${page}`
      );
      setRepositories(data);
    } catch {
      setError("Failed to load repositories.");
    }
  }, []);

  const fetchUserData = useCallback(
    async (user: string) => {
      setLoading(true);
      setError("");
      try {
        const { data } = await axios.get<UserProfile>(
          `https://api.github.com/users/${user}`
        );
        setUserData(data);
        await fetchRepositories(user, 1);
      } catch {
        setError("User not found or API request failed.");
        setUserData(null); 
      } finally {
        setLoading(false);
      }
    },
    [fetchRepositories]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) fetchUserData(username);
  };

  useEffect(() => {
    if (userData) fetchRepositories(username, page);
  }, [page, userData, fetchRepositories, username]);

  return (
    <main>
      <Header />
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

      <MainContent
        userData={userData}
        loading={loading}
        error={error}
        repositories={repositories}
        page={page}
        setPage={setPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </main>
  );
};

export default Home;