import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AppointmentForm = () => {

    const axiosPublic = useAxiosPublic()

    const { id } = useParams()
    console.log(id)

    const { data: singleService = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/service/${id}`)
            return res.data
        }
    })

    return (
        <div>
            <div>
                <Link className='text-center' to='/'><h1 className='flex gap-1 font-bold items-center text-red-700'><FaArrowLeft></FaArrowLeft>Back to Home</h1></Link>
                <form className='w-full lg:w-1/3 border p-4 mx-auto'>
                    <h1 className='text-2xl font-bold text-center py-4'>{singleService.name}</h1>
                    <div>
                        <label className='label'>
                            <span>Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="border k p-3 rounded w-full"
                            required />
                    </div>
                    <div>
                        <label className="label">
                            <span>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div>
                        <label className="label">
                            <span>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div>
                        <label className="label">
                            <span>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div>
                        <label className="label">
                            <span>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F7A582] text-white border-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;