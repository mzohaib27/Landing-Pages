import React from "react";

const TVSec = () => {
  return (
    <div className="flex px-40 py-32 text-white border-gray-500 border-b-4">
      <div className="flex items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold">Enjoy on your TV</h1>
          <p className="text-2xl ">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
      </div>
      <div>
        <img src="Images/tv.png" alt="" />
      </div>
    </div>
  );
};

export default TVSec;
