"use client";

import React from "react";
import { ErrorMessageProps } from "../_types/types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="transition-opacity bg-[linear-gradient(#f851491a,#f851491a)] dark:bg-[#3c1618] text-center border border-[#f85149] text-[#f85149] dark:text-[#e5484d] p-2 rounded-lg flex items-start shadow-md"
        role="alert"
      >
        <div>
          <span className="block sm:inline ml-1">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
