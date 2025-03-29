import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
            <nav>
                <li><Link>Admin Home</Link></li>
            </nav>
        </div>
    );
};

export default AdminSidebar;