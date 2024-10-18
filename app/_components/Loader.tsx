import * as React from "react";

const Loader = () => (
  <div className="flex items-center justify-center">
    <div
      className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-black dark:text-white"
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
