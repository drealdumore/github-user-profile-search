"use client";

import { UserProfileProps } from "../_types/types";

const UserProfile = ({ userData }: UserProfileProps) => {
  return (
    <div className="mb-8 rounded-lg border bg-background/50 border-[#eaeaea] dark:border-[#333333] shadow-sm p-6">
      <div className="flex gap-4 items-center">
        <img
          src={userData.avatar_url}
          alt={userData.login}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl text-[#333333] dark:text-[#d1d5db] font-bold capitalize">
            {userData.login}
          </h2>
          <p className="text-[#333333] dark:text-[#d1d5db] font-mono">
            @{userData.login}
          </p>
          <p className="mt-2">{userData.bio}</p>
          <p className="mt-1 text-sm text-[#333333] dark:text-[#d1d5db]">
            {userData.location}
          </p>
          <p className="mt-1 text-sm text-[#333333] dark:text-[#d1d5db]">
            {userData.public_repos} public repositories
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
