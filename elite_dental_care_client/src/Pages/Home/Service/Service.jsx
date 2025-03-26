

const Service = () => {
    return (
       <div className="mt-40">
         <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between gap-4">
            <div className="bg-[#07332F] w-full px-6 py-6 space-y-4 rounded-md ">
                <h1 className="text-2xl font-semibold">Opening hours</h1>
                <p>open 9pm to 5pm Everyday</p>
            </div>
            <div className="bg-[#F7A582] w-full px-6 py-6 space-y-4 rounded-md ">
                <h1 className="text-2xl font-semibold">Our locations</h1>
                <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
            </div>
            <div className="bg-[#07332f] w-full px-6 py-6 space-y-4 rounded-md ">
                <h1 className="text-2xl font-semibold">Contact Us</h1>
                <p>+88 01750 00 00 00</p>
                <p>+88 01750 00 00 00</p>
            </div>
        </div>
       </div>
    );
};

export default Service;