import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/Rectangle1.png'
import img from '../../assets/Frame.png'
import img2 from '../../assets/Frame2.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {

    const { signUp } = useAuth()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        signUp(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className='min-h-screen bg-white'>
            <div className='flex flex-col lg:flex-row items-center gap-8 mx-auto'>
                <div className='lg:w-1/2 min-h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <img src={img2} alt="" />
                    <img src={img} alt="" />
                </div>

                <div className='lg:w-1/2'>
                    <Link to='/'><h1 className='flex gap-1 font-bold items-center text-red-700'><FaArrowLeft></FaArrowLeft>Back to Home</h1></Link>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-2/3 border p-4 mx-auto'>
                        <h1 className='text-2xl text-black font-bold text-center py-4'>Sing up do Elite dental care</h1>
                        <div>
                            <label className='label'>
                                <span className="text-black">Name</span>
                            </label>
                            <input
                                {...register('name')}
                                type="text"
                                placeholder="name"
                                className="text-black bg-white border border-black p-3 rounded w-full"
                                required />
                        </div>
                        <div>
                            <label className='label'>
                                <span className="text-black">User Name</span>
                            </label>
                            <input
                                {...register('userName')}
                                type="text"
                                placeholder="user name"
                                className="bg-white text-black border border-black p-3 rounded w-full"
                                required />
                        </div>
                        <div>
                            <label className='label'>
                                <span className="text-black">Email</span>
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="email"
                                className="bg-white text-black border border-black p-3 rounded w-full"
                                required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-black">Password</span>
                            </label>
                            <input
                                {...register('password')}
                                type="password"
                                placeholder="password"
                                className="w-full bg-white text-black border border-black p-3 rounded"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F7A582] text-white border-none">Create Account</button>
                        </div>

                        <h1 className='text-black font-semibold py-4'>Already have an account?<Link to='/login' className='font-bold text-red-700'>Login</Link></h1>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;