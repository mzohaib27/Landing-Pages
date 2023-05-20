import React from "react";

const DiscoverMore = () => {
  return (
    <div className="my-16 mx-4 lg:mx-24 bg-violet-900 text-white">
      <h2 className="text-xl mb-7 font-semibold">Discover more topics</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:inline-flex md:space-x-2 lg:space-x-4 mb-7 space-x-1 space-y-2 ">
        <button className="text-xl py-4 px-6 rounded-lg bg-violet-900 border shadow-xl shadow-fuchsia-400 hover:scale-105 duration-300 hover:bg-black hover:text-white">
          DESIGN
        </button>
        <button className="text-xl py-4 px-6 rounded-lg bg-violet-900 border shadow-xl shadow-fuchsia-400 hover:scale-105 duration-300 hover:bg-black hover:text-white">
          CODE
        </button>
        <button className="text-xl py-4 px-6 rounded-lg bg-violet-900 border shadow-xl shadow-fuchsia-400 hover:scale-105 duration-300 hover:bg-black hover:text-white">
          ALL
        </button>
        <button className="text-xl py-4 px-6 rounded-lg bg-violet-900 border shadow-xl shadow-fuchsia-400 hover:scale-105 duration-300 hover:bg-black hover:text-white">
          INTEGRATIONS
        </button>
        <button className="text-xl py-4 px-6 rounded-lg bg-violet-900 border shadow-xl shadow-fuchsia-400 hover:scale-105 duration-300 hover:bg-black hover:text-white">
          FOUNDER'S DIARY
        </button>
        <button className="text-xl py-4 px-6 rounded-lg bg-violet-900 border shadow-xl shadow-fuchsia-400 hover:scale-105 duration-300 hover:bg-black hover:text-white">
          DESIGN TO CODE
        </button>
      </div>

      {/* CARDS */}

      <section class=" body-font">
        <div class="container px-0 py-7 ">
          <div class="flex flex-wrap  -m-4">
            {/* card-1 */}
            <div class="p-4 md:w-1/3">
              <div class="h-full hover:scale-110 duration-300  bg-violet-900 shadow-fuchsia-400 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src="Images/edtr2nd.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-4">
                    DESIGN TO <span className="text-cyan-600">CODE</span>{" "}
                    <span className="text-sm px-2 py-1 bg-violet-900  rounded-md">
                      {" "}
                      3 min to read
                    </span>
                  </h2>
                  <h1 class="title-font text-3xl font-serif font-semibold  mb-3">
                    Locofy.ai Turn Figma to Code!
                  </h1>
                  <p class="leading-relaxed mb-9">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <div className="flex flex-grow pb-0">
                      <img
                        src="Images/Anna.jpg"
                        className="rounded-full"
                        height={60}
                        width={60}
                      />
                      <div className="mx-4 mt-2">
                        <button>Anna Rose</button>
                        <br />
                        <p>Posted just now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ======== */}

            <div class="p-4 md:w-1/3">
              <div class="h-full hover:scale-110 duration-300 bg-violet-900 shadow-fuchsia-400 shadow-2xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src="Images/edtr2nd.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-4">
                    DESIGN TO <span className="text-cyan-600">CODE</span>{" "}
                    <span className="text-sm px-2 py-1 bg-violet-900  rounded-md">
                      {" "}
                      3 min to read
                    </span>
                  </h2>
                  <h1 class="title-font text-3xl font-serif font-semibold  mb-3">
                    Locofy.ai Turn Figma to Code!
                  </h1>
                  <p class="leading-relaxed mb-9">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
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
                </div>
              </div>
            </div>

            {/* ======= */}

            <div class="p-4 md:w-1/3">
              <div class="h-full hover:scale-110 duration-300 bg-violet-900  shadow-2xl shadow-fuchsia-400 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src="Images/edtr2nd.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-4">
                    DESIGN TO <span className="text-cyan-600">CODE</span>{" "}
                    <span className="text-sm px-2 py-1 bg-violet-900  rounded-md">
                      {" "}
                      3 min to read
                    </span>
                  </h2>
                  <h1 class="title-font text-3xl font-serif font-semibold  mb-3">
                    Locofy.ai Turn Figma to Code!
                  </h1>
                  <p class="leading-relaxed mb-9">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
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
                </div>
              </div>
            </div>

            {/* ======= */}

            {/* ========= */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverMore;
