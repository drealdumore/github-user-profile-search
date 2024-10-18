import React from "react";
import Github from "./github";
import ThemeSwitch from "./themeSwitch";


const Header = () => {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-8 flex h-[72px] w-full max-w-5xl items-center justify-between">
          <a aria-label="Home" href="/">
            <span className="sr-only">GitHub User Profile Search</span>

            <Github
              className="stroke-zinc-800 size-5 dark:stroke-gray-100"
              aria-hidden="true"
            />
          </a>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <ThemeSwitch />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
