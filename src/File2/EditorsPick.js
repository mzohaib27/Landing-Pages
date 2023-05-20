import React from "react";

const EditorsPick = () => {
  return (
    <div className="mx-4 my-8 lg:mx-24 bg-violet-900">
      <h2 className="text-2xl mb-4 font-semibold">Editor'sPick</h2>

      <div className=" shadow-2xl shadow-fuchsia-400 mb-5 mx-auto space-y-3 md:grid md:grid-cols-2 sm:grid-cols-2 md:space-x-10 ">
        {/* Card-1 */}

        <div className="lg:flex bg-violet-900 lg:flex-row lg:basis-1/2 rounded-lg  ">
          <div>
            <img src="Images/edtr2nd.jpg" alt="" className="overflow-hidden" />
          </div>

          <div className="md:basis-1/2 pl-6 py-3 ">
            <h5 className="text-blue-500">
              DESIGN TO <span className="text-cyan-600">CODE</span>
              <span className="text-sm px-2 py-1 bg-violet-900 rounded-md">
                3 min to read
              </span>
            </h5>
            <h3 className="text-2xl font-semibold font-serif pt-2">
              Figma for Developers
            </h3>

            <div className="flex flex-grow pb-2 mt-20">
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
        </div>

        {/* Card-2 */}

        <div className="lg:flex bg-violet-900 lg:flex-row lg:basis-1/2 rounded-lg ">
          <div>
            <img src="Images/edtr2nd.jpg" alt="" className="overflow-hidden" />
          </div>

          <div className="md:basis-1/2 pl-6 py-3 ">
            <h5 className="text-blue-500">
              DESIGN TO <span className="text-cyan-600">CODE</span>
              <span className="text-sm px-2 py-1 bg-violet-900 rounded-md">
                3 min to read
              </span>
            </h5>
            <h3 className="text-2xl font-semibold font-serif pt-2">
              Figma for Developers
            </h3>

            <div className="flex flex-grow pb-2 mt-20">
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
        </div>

        {/* == */}
        {/* <div className=" rounded-lg bg-gray-50 lg:flex-row lg:basis-1/2 overflow-hidden ">
          <div >
            <img src="Images/edtr2nd.jpg" alt="" className="overflow-hidden" />
          </div>

          <div className="md:basis-1/2 pl-6 py-3 ">
            <h5 className="text-blue-500">
              DESIGN TO <span className="text-cyan-600">CODE</span>{" "}
              <span className="text-sm px-2 py-1 bg-gray-100 rounded-md">
                {" "}
                3 min to read
              </span>
            </h5>
            <h3 className="text-2xl font-semibold font-serif pt-2">Figma for Developers</h3>

            <div className="flex flex-grow pb-2 mt-20">
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
        </div> */}

        {/* finish */}
      </div>
    </div>
  );
};

export default EditorsPick;
