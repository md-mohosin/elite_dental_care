import { GiFirstAidKit } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink>Appointment</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </>

    return (
        <div>
            <div className="navbar w-11/12 text-white mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 ">
                            <GiFirstAidKit size={50} color="white"></GiFirstAidKit>
                            <h1 className="lg:text-2xl font-bold w-full"><span className="text-red-500 ">Elite</span> Dental Care</h1>
                        </div>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 font-semibold">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;