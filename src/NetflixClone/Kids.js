import React from "react";

const Kids = () => {
  return (
    <div>
      <div className="flex px-40 py-32 text-white border-gray-500 border-b-4">
        <div className="w-1/2">
          <img src="Images/kids.png" alt="" />
        </div>
        <div className="flex items-center w-1/2">
          <div className="space-y-6 pt-32  ">
            <h1 className="text-5xl font-extrabold">
              Create profiles for kids
            </h1>
            <p className="text-2xl ">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
