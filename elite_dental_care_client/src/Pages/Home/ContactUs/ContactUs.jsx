import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-[#07332F] lg:w-10/12 mx-auto rounded-md flex flex-col lg:flex-row md:flex-row items-center py-10 px-10 my-32'>
            <div className='w-full lg:w-1/2 space-y-3'>
                <h1 className='text-3xl font-bold'>Contact With Us</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <h1>+88 01750 14 14 14</h1>
                <h1>Dhanmondi, Dhaka, Bangladesh</h1>
            </div>
            <div className='w-full lg:w-1/2 space-y-3'>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <input type="text" placeholder="Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Email" className="input input-bordered w-full" />
                </div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <input type="text" placeholder="Mobile Number" className="input input-bordered w-full" />
                    <input type="text" placeholder="Doctor Name" className="input input-bordered w-full" />
                </div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <input type="text" placeholder="Date" className="input input-bordered w-full" />
                    <input type="text" placeholder="Time" className="input input-bordered w-full" />
                </div>
                <button className="btn bg-[#F7A582] w-full text-white">Book Now</button>
            </div>
        </div>
    );
};

export default ContactUs;