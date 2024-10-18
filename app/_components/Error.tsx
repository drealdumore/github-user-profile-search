import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="transition-opacity bg-[linear-gradient(#f851491a,#f851491a)] border border-[#f85149] text-[#f85149] p-2 rounded-lg flex items-start shadow-md"
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
