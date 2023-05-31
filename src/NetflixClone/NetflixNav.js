import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

// Initialization for ES Users
// import { Dropdown, Ripple, initTE } from "tailwind-elements";

// initTE({ Dropdown, Ripple });

const NetflixNav = () => {
  return (
    <div className="bg-img">
      <div className="image-overlay border-b-4 border-gray-500">
        <div className="bg-transparent flex w-full justify-between px-64 my-2">
          <img
            src="Images/logo.png"
            className="hover:scale-150 duration-500 bg-transparent"
            alt="Netflix Logo"
            height={50}
            width={100}
          />
          {/* dropdown */}
          <div className="flex space-x-4 my-4">
            <div class="relative " data-te-dropdown-ref>
              <button
                class="flex  items-center whitespace-nowrap rounded-lg backdrop-blur-sm px-4 pb-1 pt-1 mt-2 border-white border text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                type="button"
                id="dropdownMenuButton1"
                data-te-dropdown-toggle-ref
                aria-expanded="true"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {/* icon */}
                <BsGlobe className="w-[24px] h-[20px] mx-2" /> {/*  */}
                English
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* button */}

            <button className="bg-red-500 my-2 mx-2 px-3 py-1 text-white rounded-sm hover:bg-red-700 scroll-smooth duration-300">
              Sign in
            </button>
          </div>
        </div>

        {/* Hero - Section */}
        <div className="HeroSection w-full text-white grid items-center justify-center">
          <div className="space-y-3">
            <h1 className="text-center text-5xl font-extrabold ">
              Unlimited movies, TV Shows, and More
            </h1>
            <p className="text-white text-3xl text-center">
              Watch anywhere. Cancel anytime.
            </p>
            <div className="space-y-2">
              <p className="text-center text-2xl">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="px-3 py-5 rounded-md w-96 input-bg"
                />
                <button className="bg-red-500 my-2 ml-2 px-3 py-4 rounded-s-md">
                  Get Started
                </button>
                <AiOutlineRight className="bg-red-500 h-14 px-1.5 text-2xl rounded-e-md" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default NetflixNav;
