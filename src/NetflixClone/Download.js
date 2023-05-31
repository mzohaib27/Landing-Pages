import React from "react";

const Download = () => {
  return (
    <div>
      <div className="flex px-40 py-32 text-white border-gray-500 border-b-4">
        <div>
          <img src="Images/mobile.jpg" alt="" />
        </div>
        <div className="flex items-center">
          <div className="space-y-6 pt-32">
            <h1 className="text-5xl font-extrabold">
              Download your shows to watch offline
            </h1>
            <p className="text-2xl ">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
