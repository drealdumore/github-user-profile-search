import React from "react";
import Github from "./Github";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-8 flex h-[72px] w-full max-w-5xl items-center justify-between">
          <a aria-label="Home" href="/">
            <span className="sr-only">GitHub User Profile Search</span>

            <Github aria-hidden="true" />
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
