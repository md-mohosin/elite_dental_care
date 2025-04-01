import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaUserTie } from 'react-icons/fa';
import useRole from '../../../hooks/useRole';

const Profile = () => {

    const { user,loading } = useAuth()
    const [role] = useRole()

   

    return (
        <div className='flex justify-center border lg:w-6/12 mx-auto rounded-2xl p-3'>
            <div>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    {user?.photoURL ?
                        <img src={user.photoURL} className='w-24 h-24 rounded-full flex justify-center' alt="" />
                        :
                        <FaUserTie size={60}></FaUserTie>
                    }
                    <h1 className='text-2xl font-semibold'>{user?.displayName}</h1>
                    <h1 className='text-xl font-semibold'>{role}</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;