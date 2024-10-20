"use client";

import { UserProfileProps } from "../_types/types";

const UserProfile = ({ userData }: UserProfileProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mb-8 rounded-lg border bg-background/50 w-full md:w-[30rem] border-[#eaeaea] dark:border-[#333333] shadow-sm p-6">
        <div className="flex gap-4 items-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width={128}
            height={128}
            className="w-21 h-21 md:w-32 md:h-32 rounded-full md:mb-0 md:mr-6  ring-2 ring-[#eaeaea] dark:ring-[#333333]"
          />
          <div>
            <h2 className="text-2xl line-clamp-1 text-[#333333] dark:text-[#d1d5db] font-bold capitalize">
              {userData.company}
            </h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333333] dark:text-[#d1d5db] font-mono hover:underline"
            >
              @{userData.login}
            </a>
            <p className="mt-2">{userData.bio}</p>
            <p className="mt-1 text-sm text-[#333333] dark:text-[#d1d5db]">
              {userData.location}
            </p>
            <p className="mt-1 text-sm text-[#333333] dark:text-[#d1d5db]">
              <b>{userData.public_repos}</b> public repositories
            </p>
            <div className="sm:flex hidden gap-12">
              <p className="mt-1 text-sm text-[#333333] dark:text-[#d1d5db]">
                <b>{userData.followers}</b> followers
              </p>
              <p className="mt-1 text-sm text-[#333333] dark:text-[#d1d5db]">
                <b>{userData.following}</b> following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
