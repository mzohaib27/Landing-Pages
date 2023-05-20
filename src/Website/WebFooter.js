import React from "react";

const WebFooter = () => {
  return (
    <div>
      <div className="w-full mx-auto py-8 md:flex md:flex-row border-b border-white text-white">
       
        <div className="px-16 py-10">
          <h1 className="text-xl font-semibold text-green-500">React.</h1>
          <p>
            n publishing and graphic design, Lorem ipsum is a placeholder <br />text
            commonly used to demonstrate the visual form of a document 
          </p>
           
         <div className=" ">
         <ul className="flex flex-row space-x-6 pt-6">
        <li className="hover:text-green-500 hover:scale-150 duration-300"> <ion-icon name="logo-facebook" ></ion-icon></li>
        <li className="hover:text-green-500 hover:scale-150 duration-300"> <ion-icon name="logo-instagram" ></ion-icon></li>
        <li className="hover:text-green-500 hover:scale-150 duration-300"> <ion-icon name="logo-twitter" ></ion-icon></li>
        <li className="hover:text-green-500 hover:scale-150 duration-300"> <ion-icon name="logo-github" ></ion-icon></li>
        <li className="hover:text-green-500 hover:scale-150 duration-300"> <ion-icon name="logo-linkedin" ></ion-icon> </li>
         </ul>
         
         </div>

        </div>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 lg:gap-52 px-8 md:px-16 py-5 md:py-10">
        
         <div>
            <ul className="space-y-2">
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Solution</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Analytics</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Marketing</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Commerce</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Insighs</li>
            </ul>
         </div>


         <div>
         <ul className="space-y-2">
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Support</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Pricing</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Documentation</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Guide</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">API Status</li>
            </ul>
         </div>


         <div>
         <ul className="space-y-2">
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Company</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">About</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Jobs</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Press</li>
                <li className="hover:text-green-500 hover:scale-105 duration-300 cursor-pointer">Partners</li>
            </ul>
         </div>

     </div>

     

     


      </div>

      <div className="text-white  flex justify-center ">
      <div className="pt-1">
      <ion-icon name="at-circle-outline"></ion-icon>
      </div>
      &nbsp;  2022, All rights reserved.
     </div>
    </div>
  );
};

export default WebFooter;
