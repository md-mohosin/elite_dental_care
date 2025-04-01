import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import backgroundImage from '../../assets/Rectangle1.png'
import img from '../../assets/Frame.png'
import img2 from '../../assets/Frame2.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const SignUp = () => {

    const axiosPublic = useAxiosPublic()

    const navigat = useNavigate()

    const { signUp, profileUpdate } = useAuth()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        signUp(data.email, data.password)
            .then(result => {
                console.log(result.user)
                profileUpdate(data.name, data.photo)
                navigat("/")
            })
            .catch(error => {
                console.log(error)
            })

        const usersData = {
            name: data.name,
            email: data.email,
            image:data.photo,
            role:'customer'

        }

        axiosPublic.post('/users', usersData)

    }


    return (
        <div className='min-h-screen'>
            <div className='flex flex-col lg:flex-row items-center gap-8 mx-auto'>
                <div className='lg:w-1/2 min-h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <img src={img2} alt="" />
                    <img src={img} alt="" />
                </div>

                <div className='lg:w-1/2'>
                    <Link to='/'><h1 className='flex gap-1 font-bold items-center text-red-700'><FaArrowLeft></FaArrowLeft>Back to Home</h1></Link>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-2/3 border p-4 mx-auto'>
                        <h1 className='text-2xl font-bold text-center py-4'>Sing up do Elite dental care</h1>
                        <div>
                            <label className='label'>
                                <span>Name</span>
                            </label>
                            <input
                                {...register('name')}
                                type="text"
                                placeholder="name"
                                className="border border-black p-3 rounded w-full"
                                required />
                        </div>
                        <div>
                            <label className='label'>
                                <span>User Name</span>
                            </label>
                            <input
                                {...register('photo')}
                                type="url"
                                placeholder="Photo URL"
                                className="border p-3 rounded w-full"
                                required />
                        </div>
                        <div>
                            <label className='label'>
                                <span>Email</span>
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="email"
                                className="border border-black p-3 rounded w-full"
                                required />
                        </div>
                        <div>
                            <label className="label">
                                <span>Password</span>
                            </label>
                            <input
                                {...register('password')}
                                type="password"
                                placeholder="password"
                                className="w-full border p-3 rounded"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F7A582] text-white border-none">Create Account</button>
                        </div>

                        <div className='flex justify-center items-center my-4'>
                            <SocialLogin></SocialLogin>
                        </div>

                        <h1 className='font-semibold py-4'>Already have an account?<Link to='/login' className='font-bold text-red-700'>Login</Link></h1>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;