import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrum = () => {
  const location = useLocation();

  // Remove leading slash from pathname
  const cleanPathname = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;

  const toTitleCase = (str) => {
    return str
      .split("/")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }; 
  
  

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center sm:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="ml-1 inline-flex text-[15px] sm:text-[16px] font-medium text-white hover:underline sm:ml-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-4 h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center justify-center">
            <span className="mx-2.5 text-white">/</span>
            <div className="ml-1 sm:text-[16px] text-[15px] font-medium text-white hover:underline md:ml-2 cursor-default">
              {toTitleCase(cleanPathname)}
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrum;
