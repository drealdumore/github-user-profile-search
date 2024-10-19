export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
  };
}

export interface UserProfileProps {
  userData: UserProfile;
}

export interface UserProfile {
  public_repos: string;
  location: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export interface ErrorMessageProps {
  message: string;
}

export interface MainContentProps {
  userData: UserProfile | null;
  loading: boolean;
  error: string;
  repositories: Repository[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  itemsPerPage: number;
}

export interface RepositoryListProps {
  repositories: Repository[];
}

export interface RepositoryPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  repositoriesCount: number;
  itemsPerPage: number;
}

export interface RepositoryTableProps {
  repositories: Repository[];
}

export interface SearchBarProps {
  username: string;
  setUsername: (username: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}
