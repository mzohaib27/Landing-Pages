import React from "react";

const WebCards = () => {
  return (
    <div>
      <div className="w-full py-[5rem] px-10 bg-white">
        <div className="max-w-[1240px] grid md:grid-cols-3 gap-8 mx-auto  border-black">
         
         
          {/* Card-1 */}

          <div className="w-full  rounded-md text-center pt-5 border shadow-lg hover:scale-105 duration-500 ">
            <ion-icon
              name="person-outline"
              size="large"
              className="size"
            ></ion-icon>
            <h2 className="text-2xl font-semibold py-2 ">Single User</h2>
            <p className="text-5xl font-bold py-2">$149</p>
            <div className="font-semibold">
              <p className="py-2 border-b mx-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>

            <button className="px-10 rounded my-3 py-2 hover:bg-black hover:text-white hover:scale-110 duration-700 bg-green-500 text-black">
              Start Trial
            </button>
          </div>




          {/* === Card - 2*/}


          <div className="w-full pt-5 bg-slate-300 pb-5 rounded-md text-center  border shadow-lg hover:scale-125 duration-500 ">
          <ion-icon name="people-outline" size="large" className="size"></ion-icon>
            <h2 className="text-2xl font-semibold py-2 ">For Group</h2>
            <p className="text-5xl font-bold py-2">$300</p>
            <div className="font-semibold">
              <p className="py-2 border-b mx-8">2 TB Storage</p>
              <p className="py-2 border-b mx-8">3 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 8 GB</p>
            </div>

            <button className="px-10 rounded my-3 py-2 hover:bg-black hover:text-white hover:scale-110 duration-700 bg-black text-green-500">
              Start Trial
            </button>
          </div>


{/* === Card -3  */}

<div className="w-full pt-5 rounded-md text-center  border shadow-lg hover:scale-105 duration-500 ">
            <ion-icon
              name="person-outline"
              size="large"
              className="size"
            ></ion-icon>
            <h2 className="text-2xl font-semibold py-2 ">Single User</h2>
            <p className="text-5xl font-bold py-2">$200</p>
            <div className="font-semibold">
              <p className="py-2 border-b mx-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 4 GB</p>
            </div>

            <button className="px-10 rounded my-3 py-2 hover:bg-black hover:text-white hover:scale-110 duration-700 bg-green-500 text-black">
              Start Trial
            </button>
          </div>


{/* ====== */}
        </div>
      </div>
    </div>
  );
};

export default WebCards;
