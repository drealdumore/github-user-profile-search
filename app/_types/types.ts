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
  userData: string | any | undefined;
}

export interface ErrorMessageProps {
  message: string;
}

export interface MainContentProps {
  userData: string | any | undefined;
  loading: boolean;
  error: string;
  repositories: Repository[];
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
}

export interface RepositoryListProps {
  repositories: Repository[];
}

export interface RepositoryPaginationProps {
  page: number;
  setPage: (page: number | any) => void;
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
