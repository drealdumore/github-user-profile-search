// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// import RepositoryList from "./_components/RepositoryList";
// import RepositoryTable from "./_components/RepositoryTable";
// import Header from "./_components/Header";
// import Loader from "./_components/Loader";
// import ErrorMessage from "./_components/Error";

// const ITEMS_PER_PAGE = 30;

// const Home = () => {
//   const [username, setUsername] = useState("");
//   const [userData, setUserData] = useState<any>(null);
//   const [repositories, setRepositories] = useState<any[]>([]);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchUserData = useCallback(async (user: string) => {
//     setLoading(true);
//     setError("");
//     try {
//       const { data } = await axios.get(`https://api.github.com/users/${user}`);
//       setUserData(data);
//       await fetchRepositories(user, 1);
//     } catch {
//       setError("User not found or API request failed.");
//       setUserData(null);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const fetchRepositories = useCallback(async (user: string, page: number) => {
//     try {
//       const { data } = await axios.get(
//         `https://api.github.com/users/${user}/repos?per_page=${ITEMS_PER_PAGE}&page=${page}`
//       );
//       setRepositories(data);
//     } catch {
//       setError("Failed to load repositories.");
//     }
//   }, []);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (username) fetchUserData(username);
//   };

//   useEffect(() => {
//     if (userData) fetchRepositories(username, page);
//   }, [page, userData, fetchRepositories, username]);

//   const handlePageChange = (direction: "prev" | "next") => {
//     if (direction === "next") {
//       setPage((prev) => prev + 1);
//     } else {
//       setPage((prev) => Math.max(prev - 1, 1));
//     }

//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [page]);

//   return (
//     <main>
//       <Header />

//       <div className="flex items-center justify-center flex-col">
//         <h1 className="text-2xl font-semibold mb-3 text-foreground md:text-4xl text-center">
//           GitHub User Profile Search
//         </h1>

//         <form onSubmit={handleSearch} className="mb-8">
//           <div className="flex items-center max-w-md mx-auto">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter GitHub username"
//                 className="flex h-9 w-full rounded-lg border border-[#d4d4d8] bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground transition-shadow focus-visible:ring-2 placeholder:text-sm font-mono focus-visible:ring-[#a1a1aa]/30 focus-visible:ring-offset-2 focus-visible:outline-none"
//                 id="username"
//               />
//               <button
//                 type="submit"
//                 className="inline-flex items-center rounded-lg border bg-background px-3 text-sm font-medium transition hover:bg-[#d4d4d8] hover:text-foreground focus-visible:ring-2 focus-visible:ring-[#a1a1aa]/30"
//               >
//                 <Search className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       {loading && <Loader />}
//       {error && <ErrorMessage message={error} />}

//       {userData && (
//         <div className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
//           <div className="flex flex-col md:flex-row items-center">
//             <Image
//               src={userData.avatar_url}
//               alt={userData.login}
//               width={128}
//               height={128}
//               className="w-32 h-32 rounded-full md:mb-0 md:mr-6"
//             />
//             <div>
//               <h2 className="text-2xl font-bold">{userData.login}</h2>
//               <p className="text-gray-600 font-mono dark:text-gray-400">
//                 @{userData.login}
//               </p>
//               <p className="mt-2">{userData.bio}</p>
//               <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                 {userData.location}
//               </p>
//               <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                 {userData.public_repos} public repositories
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {repositories.length > 0 && (
//         <>
//           <h3 className="text-lg font-semibold">Repositories:</h3>

//           <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-4 [&>*]:before:absolute [&>*]:before:bg-[#e5e7eb]/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-[#e5e7eb]/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
//             <RepositoryTable repositories={repositories} />
//           </div>
//         </>
//       )}

//       {repositories.length > 0 && (
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => handlePageChange("prev")}
//             disabled={page === 1}
//             className={`mr-2 px-4 py-2 rounded-md disabled:pointer-events-none disabled:cursor-not-allowed ${
//               page === 1
//                 ? "bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
//                 : "bg-gray-200 dark:bg-gray-700"
//             }`}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => handlePageChange("next")}
//             disabled={repositories.length < ITEMS_PER_PAGE}
//             className={`px-4 py-2 rounded-md disabled:pointer-events-none disabled:cursor-not-allowed ${
//               repositories.length < ITEMS_PER_PAGE
//                 ? "bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
//                 : "bg-gray-200 dark:bg-gray-700"
//             }`}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Home;


"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "./_components/SearchBar";
import MainContent from "./_components/MainContent";
import Header from "./_components/Header";

const ITEMS_PER_PAGE = 30;

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [repositories, setRepositories] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUserData = useCallback(async (user: string) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(data);
      await fetchRepositories(user, 1);
    } catch {
      setError("User not found or API request failed.");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRepositories = useCallback(async (user: string, page: number) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=${ITEMS_PER_PAGE}&page=${page}`
      );
      setRepositories(data);
    } catch {
      setError("Failed to load repositories.");
    }
  }, []);

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
        <h1 className="text-2xl font-semibold mb-3 text-foreground md:text-4xl text-center">
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
