import React ,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const WebNavbar = () => {

 const [nav,setNav] = useState(false)

 const handleNav = () => {
    setNav(!nav)
 }


  return (
    <div className="h-24 text-white  max-w-[1240px] px-4 mx-auto flex items-center justify-between">
        <h1 className=" w-full text-3xl font-semibold ml-1 ">React.</h1>
        <ul className=" justify-items-end space-x-4 pr-10 hidden md:flex" >
            <li className="px-3 py-2 bg-slate-500 rounded">Home</li> 
            <li className="px-3 py-2 bg-slate-500 rounded">Company</li>
            <li className="px-3 py-2 bg-slate-500 rounded">Resources</li>
            <li className="px-3 py-2 bg-slate-500 rounded">About</li>
            <li className="px-3 py-2 bg-slate-500 rounded">Contact</li>
        </ul>
 
 

        <div onClick={handleNav} className="block md:hidden">
        {
    nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
        }
        </div>

      <div>
      <ul className= {!nav ? "fixed left-[-100%]":"fixed top-0 left-0 w-[60%] border-gray-800 pt-20 uppercase border-r-2 ease-in-out duration-700" } >
            <li className="px-3 py-2 bg-gray-800 border-b border-gray-600 rounded">Home</li> 
            <li className="px-3 py-2 bg-gray-800 border-b border-gray-600 rounded">Company</li>
            <li className="px-3 py-2 bg-gray-800 border-b border-gray-600 rounded">Resources</li>
            <li className="px-3 py-2 bg-gray-800 border-b border-gray-600 rounded">About</li>
            <li className="px-3 py-2 bg-gray-800 border-b border-gray-600 rounded">Contact</li>
        </ul>
      </div>



    </div>
  )
}

export default WebNavbar