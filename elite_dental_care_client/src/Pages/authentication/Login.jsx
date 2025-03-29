import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/Rectangle1.png'
import img from '../../assets/Frame.png'
import img2 from '../../assets/Frame2.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/SocialLogin';

const Login = () => {


    const { login } = useAuth()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        login(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }



    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center gap-8 mx-auto'>
                <div className='w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <img className='h-[300px]' src={img2} alt="" />
                    <img className='h-[300px]' src={img} alt="" />
                </div>

                <div className='w-11/12 mx-auto lg:w-1/2'>
                    <Link to='/'><h1 className='flex gap-1 font-bold items-center text-red-700'><FaArrowLeft></FaArrowLeft>Back to Home</h1></Link>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-2/3 border p-4 mx-auto'>
                        <h1 className='text-2xl font-bold text-center py-4'>Login do Elite dental care</h1>


                        <div>
                            <label className='label'>
                                <span>Email</span>
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="email"
                                className="border p-3 rounded w-full"
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
                                className="w-full border  p-3 rounded"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F7A582] text-white border-none">Login</button>
                        </div>
                        <div className='flex items-center justify-center my-4'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <h1 className='font-semibold py-4'>Do ot  have an account?<Link to='/signUp' className='font-bold text-red-700'>Sign UP</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;