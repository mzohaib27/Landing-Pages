import React from "react";

import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";

const FAQ = () => {
  return (
    <div>
      <div className="grid border-b-4 border-gray-500 w-full px-48 space-y-3 ">
        <h1 className="text-5xl py-6 font-extrabold text-white text-center">
          Frequently Asked Questions
        </h1>
        {/* 1st */}
        <div className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 cursor-pointer duration-300 my-3 px-6 py-5">
          <h1 className="text-2xl font-normal  text-white">
            What is Netflix ?
          </h1>
          <button className="text-white text-5xl font-extrabold">
            <AiOutlinePlus />
          </button>
        </div>
        {/* 2nd */}
        <div className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 cursor-pointer duration-300 my-3 px-6 py-5">
          <h1 className="text-2xl font-normal  text-white">
            How much does Netflix cost ?
          </h1>
          <button className="text-white text-5xl font-extrabold">
            <AiOutlinePlus />
          </button>
        </div>
        {/* 3rd */}
        <div className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 cursor-pointer duration-300 my-3 px-6 py-5">
          <h1 className="text-2xl font-normal  text-white">
            Where can i watch ?
          </h1>
          <button className="text-white text-5xl font-extrabold">
            <AiOutlinePlus />
          </button>
        </div>
        {/* 4th */}
        <div className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 cursor-pointer duration-300 my-3 px-6 py-5">
          <h1 className="text-2xl font-normal  text-white">
            How do i cancel ?
          </h1>
          <button className="text-white text-5xl font-extrabold">
            <AiOutlinePlus />
          </button>
        </div>
        {/* 5th */}
        <div className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 cursor-pointer duration-300 my-3 px-6 py-5">
          <h1 className="text-2xl font-normal  text-white">
            What can i do watch on Netflix ?
          </h1>
          <button className="text-white text-5xl font-extrabold">
            <AiOutlinePlus />
          </button>
        </div>
        {/* 6th */}
        <div className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 cursor-pointer duration-300 my-3 px-6 py-5">
          <h1 className="text-2xl font-normal  text-white">
            Is Netflix good for kids ?
          </h1>
          <button className="text-white text-5xl font-extrabold">
            <AiOutlinePlus />
          </button>
        </div>
        {/* end */}
        <div className="pb-20 pt-8">
          <p className="text-white text-xl text-center my-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-3 py-5 rounded-md w-96 input-bg"
              />
              <button className="bg-red-600 text-white text-xl my-2 ml-2 px-2 py-4 rounded-s-md">
                Get Started
              </button>
              <AiOutlineRight className="bg-red-600 text-white  h-[3.8rem] px-1 text-3xl rounded-e-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
