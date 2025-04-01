import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { RiMenuFold4Line } from "react-icons/ri";
import useAuth from "../hooks/useAuth";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import { FaHome } from "react-icons/fa";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth()


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white md:relative md:translate-x-0 md:flex md:w-64 md:flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-64"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 md:hidden">
          <div></div>
          <button onClick={() => setIsOpen(false)}>
            <IoClose size={35} color="red" className="border rounded-full flex justify-end p-1"></IoClose>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-4">
            <Link to='/dashboard/profile'>
              <div className="flex items-center gap-4 shadow-xl bg-gray-950 p-2 rounded-md">
                {user && <img src={user.photoURL} className="w-10 h-10 rounded-full flex justify-center" alt="" />}
                {user && <h1 className=" font-semibold">{user.displayName}</h1>}
              </div>
            </Link>

          </div>
          <div className="flex flex-col space-y-10 lg:space-y-28">
            <Sidebar></Sidebar>
            <div>
            <Link to="/" className="gap-2 p-2 rounded hover:bg-gray-700 flex items-center">
             <FaHome></FaHome>Home
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-gray-900 text-white p-4 md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <RiMenuFold4Line size={25}></RiMenuFold4Line>
          </button>
          {user && <h1 className="text-xl font-semibold">{user.displayName}</h1>}
        </div>
        {/* Outlet for Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
