import React from "react";

const GuestAuthor = () => {
  return (
    <div className=" lg:mx-24 mb-5 px-4 py-4 bg-violet-900 text-white">
      <h2 className="text-2xl font-semibold mb-8">Guest Author Entry</h2>
      <div className="grid grid-cols-1 lg:flex lg:flex-row shadow-2xl shadow-fuchsia-400  relative">
        <div className="absolute z-10  top-44 left-40 xs1:top-64 xs1:left-52 xs2:top-64 xs2:left-72 sm:top-64 sm:left-80 lg:top-28 lg:right-1/4 lg:flex justify-center items-end">
          <img
            src="Images/Anna.jpg"
            alt=""
            className="rounded-full h-16 w-16 "
          />
        </div>

        <div className="object-cover overflow-hidden h-72 lg:w-1/2 rounded-lg ">
          <img src="Images/devScreen.jpg" alt="" />
        </div>

        <div className="pl-5 xs2:pt-12 lg:pl-10 xs1:pt-12">
          <h5 className="text-blue-500">
            DESIGN TO <span className="text-cyan-600">CODE</span>{" "}
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-md">
              {" "}
              3 min to read
            </span>
          </h5>
          <h1 className="text-3xl font-serif pt-4 font-semibold">
            Build faster like a loco - <br /> Locofy Hackathon 2022
          </h1>
          <div className=" py-5 ">
            <p>
              More than 100 user participated in the recently concluded <br />
              Locofy Hackathon.
            </p>
          </div>
          <hr className="text-black" />
          <div className="flex flex-row space-x-24 py-4">
            <p>
              <span>Posted by</span> Justin Benito
            </p>
            <p className="">Posted on 4 Sep 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestAuthor;
