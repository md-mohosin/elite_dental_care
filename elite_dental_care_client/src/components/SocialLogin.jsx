import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {

    const axiosPublic = useAxiosPublic()
    const { googleLogin } = useAuth()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const userData = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    image: result.user?.photoURL,
                }
                axiosPublic.post('/users', userData)
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}
                className='border rounded-full p-1'><FcGoogle size={28}></FcGoogle></button>
        </div>
    );
};

export default SocialLogin;