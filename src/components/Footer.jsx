import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-3 mt-auto">
      <Container>
        <div className="flex justify-between items-center">
          <p className="text-white">
            Copyright © 2023
            <a
              className="underline underline-offset-4"
              href="https://mms-it.com"
            >
              MMS IT
            </a>
          </p>
          <button
            type="button"
            className="text-white border border-white hover:bg-white hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
