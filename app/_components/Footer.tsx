"use client";

import Link from "next/link";
import { SOCIALS } from "../../utils/metadata";

export default function Footer() {
  return (
    <footer className="w-full font-mono text-center py-4 border-t mt-auto">
      <div className="flex justify-center space-x-4 mb-2">
        <Link href={SOCIALS.twitter.url} passHref>
          <p className="hover:text-neutral-500 hover:underline cursor-pointer text-sm">
            Twitter
          </p>
        </Link>
        <Link href={SOCIALS.github.url} passHref>
          <p className="hover:text-neutral-500 hover:underline cursor-pointer text-sm">
            GitHub
          </p>
        </Link>
        <Link href={SOCIALS.linkedin.url} passHref>
          <p className="hover:text-neutral-500 hover:underline cursor-pointer text-sm">
            LinkedIn
          </p>
        </Link>
      </div>
      <p className="text-xs hover:text-neutral-500">
        © {new Date().getFullYear()} GitHub User Profile Search.
      </p>
    </footer>
  );
}
