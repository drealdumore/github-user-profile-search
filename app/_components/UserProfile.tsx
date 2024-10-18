import Image from "next/image";

interface UserProfileProps {
  userData: any;
}

const UserProfile = ({ userData }: UserProfileProps) => {
  return (
    <div className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={userData.avatar_url}
          alt={userData.login}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold">{userData.login}</h2>
          <p className="text-gray-600 font-mono dark:text-gray-400">
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
  );
};

export default UserProfile;
