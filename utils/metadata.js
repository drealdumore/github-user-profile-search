export const sharedMetadata = {
  title: "GitHub User Profile Search",
  description:
    "Explore GitHub repositories and view details like stars and forks.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://github-users-search.vercel.app",
  ogImage: {
    width: 1200,
    height: 630,
    type: "image/png",
  },
  image: "./og.png",
};

export const SOCIALS = {
  twitter: {
    title: "X (Twitter)",
    username: "drealdumore",
    url: "https://twitter.com/drealdumore",
  },

  github: {
    title: "GitHub",
    url: "https://github.com/drealdumore",
  },

  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/samuel-isah",
  },
};
