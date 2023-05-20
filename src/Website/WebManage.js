import React from "react";

const WebManage = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-col-2 lg:px-20 py-4 px-4 bg-white">
        <div className=" w-full md:h-[300px]  ">
          <img
            src="Images/data3.png"
            alt=""
            className="md:h-[300px] md:px-16 lg:px-0 lg:w-[900px] object-cover"
          />
        </div>

        <div className="my-5 md:px-16 px-1">
          <p className="text-green-500 uppercase font-semibold">Data Analytics Dashboard</p>
          <h1 className="text-2xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="py-3 font-semibold">
            n publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
          <button className="bg-black px-3 py-2 text-green-500 rounded shadow">
            Get Started
          </button>
        </div>
      </div>

      {/* ======tips and tricks */}

      <div
        className="text-white px-1 py-4 lg:flex lg:flex-row lg:py-10 md:py-8 md:px-10
  sm:px-0 xl:py-14"
      >
        <div className="lg:py-6 px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Want tips and tricks to optimize your flow?
          </h1>
          <p className="py-3">Sign up our newsletter and stay uptodate</p>
        </div>

        <div className="pl-8 ">
          <div className="space-x-2  ">
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded lg:w-96 focus:shadow-lg  text-black focus:outline-none focus:shadow-green-500 px-2 py-1"
        required    />
            <button className="bg-green-500 hover:bg-green-600 hover:scale-105 duration-300   text-black font-bold rounded px-2 py-1 mb-4 ">
              Notify Me
            </button>
          </div>

          <p className="">
            We care about the protection of your data.Read our
          </p>

          <a href="#" className="text-green-500">Privacy Policy</a>
        </div>
      </div>

      {/* ==== */}
    </div>
  );
};

export default WebManage;
