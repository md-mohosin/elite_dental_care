
import img1 from '../../../assets/360_F_225707294_V0jKFrHm1Bm5mLQjTAhKFplaWQIgdHby.jpg'
import img2 from '../../../assets/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg'
import img3 from '../../../assets/depositphotos_362623104-stock-photo-indian-medical-worker-man-in.jpg'

const Banner = () => {
    return (

        <div className="hero h-[600px] mb-10">
            <div className="hero-content flex-col lg:flex-row lg:justify-between w-11/12 gap-4">

                <div className='lg:w-1/2'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Your Best Medical Help Center</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-red-500 text-white">Get Started</button>
                </div>


                <div>
                    <div className=' flex flex-wrap lg:gap-4 justify-center lg:h-60'>

                        <div className='w-1/2 lg:w-1/3'>
                            <img className='w-32 h-32 lg:w-40 lg:h-48 border-4 border-gray-400 ' src={img1} alt="" />
                        </div>


                        <div className='w-1/2 lg:w-1/3 relative -mt-3 lg:-mt-6'>
                            <img className='w-32 h-32 lg:w-40 lg:h-48 border-4 border-gray-400' src={img2} alt="" />
                        </div>


                        <div className='w-1/2 lg:w-1/3 -mt-20 lg:-mt-40'>
                            <img className='w-32 h-32 lg:w-40 lg:h-48 border-4 border-gray-400' src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;