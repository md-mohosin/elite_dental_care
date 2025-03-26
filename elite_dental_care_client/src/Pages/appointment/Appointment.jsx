import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const Appointment = () => {

    const axiosPublic = useAxiosPublic()


    const { data: services = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/service')
            return res.data
        }
    })

    return (
        <div>
            <div className="bg-[#07332F]">
                <Navbar></Navbar>
                <h1 className="text-4xl font-bold w-11/12 mx-auto py-28">Appointment</h1>
            </div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-4xl font-bold text-center'>Please Select a Service
                </h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8'>
                    {
                        Array.isArray(services) && services.map(service => <Link to={`/appointment/${service._id}`}>
                            <div className='w-full flex items-center gap-3 bg-white text-black p-4 rounded-lg cursor-pointer'>
                                <div>
                                    <img className='w-20 h-20 rounded-lg bg-[#FFECEE] p-3' src={service.image} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold'>{service.name}</h1>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Appointment;
