"use client";

import React from "react";
import Github from "./Github";
import ThemeSwitch from "./Theme";

const Header = () => {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-8 flex h-[72px] w-full items-center justify-between">
          <a aria-label="Home" href="/">
            <span className="sr-only">GitHub User Profile Search</span>

            <Github aria-hidden="true" className="size-5 md:size-8" />
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
