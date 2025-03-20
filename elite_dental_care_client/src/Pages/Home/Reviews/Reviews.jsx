import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Reviews = () => {

    const axiosPublic = useAxiosPublic()

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data
        }
    })

    return (
        <div className='w-10/12 mx-auto'>

<div>
    <h1 className='text-4xl font-bold text-white'>What our pateints says</h1>
</div>

            <Swiper spaceBetween={20} navigation={true} modules={[Navigation]} slidesPerView={2} className="mySwiper  flex justify-center items-center"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                }}
            >
                {
                    Array.isArray(reviews) ? reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='w-full bg-white flex text-black h-[200px] rounded-lg border-2 py-6 px-6 lg:px-14'>
                                <div className='space-y-3'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='w-10 h-10 rounded-full border-2 border-blue-800' src={review.image} alt="" />
                                        <div>
                                            <h1>{review.name}</h1>
                                            <p>{review.position}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{review.review}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ) : ''
                }


            </Swiper>
        </div>
    );
};

export default Reviews;