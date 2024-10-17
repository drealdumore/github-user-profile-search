
# GitHub User Profile Search

## Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm run dev
   ```

3. Open in your browser: [http://localhost:3000](http://localhost:3000)

## Features
- Search for GitHub profiles by username.
- Display user information (avatar, bio, location, public repositories).
- Display list of public repositories with repo names, descriptions, stars, and forks.
- Pagination for repositories (GitHub API limits results to 30 per page).
- Responsive design using Tailwind CSS.

## Bonus Features
- Loading indicator while fetching data.
- Next.js dynamic routes for sharing profile URLs (e.g., /user/octocat).
- Dark mode toggle with Tailwind CSS.

## Technologies Used
- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Strongly typed programming language for enhanced developer experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Axios**: HTTP client for making API requests.
- **GitHub API**: To fetch GitHub user profile data and repositories.

## Additional Instructions
- Handle API rate limits and display appropriate error messages if the limit is exceeded.
- Gracefully handle invalid usernames and API request failures with user-friendly error messages.
- Ensure mobile responsiveness and intuitive UI.

## How to Contribute
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
