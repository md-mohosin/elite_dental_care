import React from 'react';
import { BsPersonFillAdd } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa6';
import {  NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/dashboard/allUsers_admin" className="p-2 rounded hover:bg-gray-700 flex items-center gap-2">
                <FaUsers></FaUsers>All Users
                </NavLink>
                <NavLink to="/dashboard/addDoctor_admin" className="p-2 rounded hover:bg-gray-700 flex items-center gap-2">
                <BsPersonFillAdd></BsPersonFillAdd>Add a Doctor
                </NavLink>
            </nav>
        </div>
    );
};

export default AdminSidebar;