import React from "react";

const Footer = () => {
  return (
    <div className="px-4 py-4 bg-violet-900">
      <div className="md:flex md:flex-row lg:mx-24 lg:my-10 my-5 lg:py-14 lg:px-7 px-4 py-8  rounded-md shadow-2xl shadow-fuchsia-400">
        <div className="w-full pl-4">
          <h1 className="text-xl font-bold">Keep your loco mode on!</h1>
          <p className="text-xl">
            Stay updated on the latest Locofy announcements and product updates
          </p>
        </div>

        <div className="w-full my-5 lg:pl-8 pl-4 space-y-3 space-x-2 lg:space-x-3">
          <input
            type="text"
            placeholder="Enter email address"
            className="py-2 px-4 lg:w-96 bg-violet-500 rounded shadow-lg shadow-fuchsia-400 hover:scale-105 duration-500 hover:bg-violet-500"
          />
          <button className="shadow-fuchsia-400 shadow-lg bg-violet-600 text-white hover:scale-105 duration-500 hover:bg-violet-500 rounded py-2 px-4">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <ion-icon name="refresh-circle-outline"></ion-icon>
        2022, Locofy Pte Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
