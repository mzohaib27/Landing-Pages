import React from "react";

const Header2 = () => {
  return (
    <div>
      <header class="text-white body-font bg-black w-full">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a class="flex title-font font-medium items-center p-4 rounded-lg text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-white hover:rounded-md hover:text-black transition-all duration-700">
              Tailblocks
            </span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center nav-links">
            <a class="mr-5 hover:text-gray-900 hover:py-2 hover:px-4 hover:rounded-md transition-all duration-700">
              First Link
            </a>
            <a class="mr-5 hover:text-gray-900 hover:py-2 hover:px-4 hover:rounded-md transition-all duration-700">
              Second Link
            </a>
            <a class="mr-5 hover:text-gray-900 hover:py-2 hover:px-4 hover:rounded-md transition-all duration-700">
              Third Link
            </a>
            <a class="mr-5 hover:text-gray-900 hover:py-2 hover:px-4 hover:rounded-md transition-all duration-700">
              Fourth Link
            </a>
          </nav>
          <button class="inline-flex items-center text-black bg-white hover:shadow-lg hover:shadow-fuchsia-600 border-0 py-1 px-3 focus:outline-none hover:bg-violet-700 hover:text-white hover:py-1 hover:px-4 transition-all duration-1000 rounded-lg text-base mt-4 md:mt-0">
            Log in
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header2;
