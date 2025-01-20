
import { useState } from "react";
import Docotr from "../Doctor/Docotr";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Doctors = () => {

    const axiosPublic = useAxiosPublic()

    const [doctors, setDoctors] = useState([])

    axiosPublic.get('/doctors')
        .then(res => {
            setDoctors(res.data)
        })



    return (
        <div className="w-11/12 mx-auto mt-10 mb-10">
            <div>
                <h1 className="text-2xl font-bold text-center">Out Expart Doctors</h1>
                <p className="text-center pt-4">Doctors hold a crucial position in society as they are the cornerstone of healthcare systems, ensuring the well-being and health of individuals and communities. Their responsibilities go far beyond treating illnesses; they encompass prevention, education, and advocacy for public health.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    doctors.map(doctor => <Docotr key={doctor._id} doctor={doctor}></Docotr>)
                }
            </div>
        </div>

    );
};

export default Doctors;