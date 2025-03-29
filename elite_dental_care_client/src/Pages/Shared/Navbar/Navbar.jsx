import { GiFirstAidKit } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
    }

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/appointment'>Appointment</NavLink>
        {user && <NavLink to='/dashboard'>Dashboard</NavLink>}

        {
            user ?
                <button
                    onClick={handleLogOut}
                    className="btn btn-xs bg-white text-black text-xs py-0">LogOut</button>
                :
                <NavLink to='/login'>Login</NavLink>

        }
        {/* {
            user & <img src={user.photoURL} alt="" />
        } */}
    </>


    return (
        <div>
            <div className="navbar w-11/12 mx-auto">
                <div className="w-full navbar-start ">
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
                            <h1 className="lg:text-2xl font-bold"><span className="text-red-500 ">Elite</span> Dental Care</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 font-semibold">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;