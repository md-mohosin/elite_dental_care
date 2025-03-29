import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RiMenuFold4Line } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white md:relative md:translate-x-0 md:flex md:w-64 md:flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-64"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 md:hidden">
          <span className="text-lg font-semibold">Dashboard</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <IoClose size={25}></IoClose>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2"><MdDashboard></MdDashboard>Dashboard</h1>
          </div>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">
              Home
            </Link>
            <Link to="/dashboard/sidebar" className="block p-2 rounded hover:bg-gray-700">
              Sidebar
            </Link>
            <Link to="/dashboard/settings" className="block p-2 rounded hover:bg-gray-700">
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-gray-900 text-white p-4 md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <RiMenuFold4Line size={25}></RiMenuFold4Line>
          </button>
          <span className="text-lg font-semibold">Dashboard</span>
        </div>
        {/* Outlet for Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
