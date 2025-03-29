import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const AppointmentForm = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const navigate = useNavigate()

    const { id } = useParams()
    console.log(id)

    const { data: singleService = [], isError } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/service/${id}`)
            return res.data

        }
    })

    if (isError) return <p>Error..</p>

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const serviceData = {
            service_name: singleService.name,
            time: singleService.time,
            date: data.date,
            name: data.name,
            phone: data.phone,
            email: user?.email

        }

        axiosPublic.post('/appointment', serviceData)

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });

        reset()
        navigate(-1)
    }



    return (
        <div>
            <div>
                <Link className='text-center' to='/'><h1 className='flex gap-1 font-bold items-center text-red-700'><FaArrowLeft></FaArrowLeft>Back to Home</h1></Link>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/3 border p-4 mx-auto space-y-3'>
                    <h1 className='text-2xl font-bold text-center py-4'>{singleService.name}</h1>
                    <div>
                        <input {...register('time')}
                            defaultValue={singleService.time} readOnly
                            type="text"
                            className="border k p-3 rounded w-full"
                            required />
                    </div>
                    <div>
                        <input {...register('date')}
                            type="date"
                            placeholder="Date"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div>
                        <input {...register('name')}
                            type="text"
                            placeholder="Full Name"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div>
                        <input {...register('phone')}
                            type="text"
                            placeholder="Phone Number"
                            className="w-full border p-3 rounded"
                            required />
                    </div>
                    <div>
                        <input {...register('email')} defaultValue={user?.email}
                            type="email" readOnly
                            placeholder="Email"
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