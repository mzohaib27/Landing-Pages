import React from "react";

const HeroSection2 = () => {
  return (
    <div>
      <div className="bg-violet-900 shadow-2xl shadow-fuchsia-400 rounded-lg mx-4 lg:my-20 lg:mx-24 pb-2 pl-8 pt-5 md:flex md:flex-row  ">
        <div className="md:w-1/2 md:basis-1/2 py-3  ">
          <h5 className="text-blue-500">
            DESIGN TO <span className="text-cyan-600">CODE</span>{" "}
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-md">
              {" "}
              3 min to read
            </span>
          </h5>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif pt-4 font-semibold">
            Locofy.ai - Turn Figma to Code!
          </h1>
          <div className="w-1/2 py-5 ">
            <p>
              Go from figma to code in minimum amount of time using Locofy. Take
              your design to real world with Locofy's AI powered plugin.
            </p>
          </div>

          {/* <div className="py-2 flex-row flex items-center  " > */}
          <div className="bg-violet-700 hover:scale-105 duration-300 shadow-lg shadow-fuchsia-400 items-center py-2 mb-5 px-2 inline-flex rounded-lg">
            <button className=" pr-2 ">Continue reading </button>
            <ion-icon
              name="arrow-forward-outline"
              className="items-center pt-2 justify-center"
            ></ion-icon>
          </div>

          {/* </div> */}

          <div className="flex flex-grow pb-0">
            <img
              src="Images/Anna.jpg"
              className="rounded-full"
              height={60}
              width={60}
            />
            <div className="mx-4 my-2">
              <button>Anna Rose</button>
              <br />
              <p>Posted just now</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="Images/devScreen.jpg"
            alt=""
            width={600}
            height={850}
            className="pr-5"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
