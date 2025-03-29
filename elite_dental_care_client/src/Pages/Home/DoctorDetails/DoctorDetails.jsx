import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Navbar from "../../Shared/Navbar/Navbar";

const DoctorDetails = () => {

    const axiosPublic = useAxiosPublic()

    const { id } = useParams()

    const { data: doctor = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/doctors/${id}`)
            console.log(res)
            return res.data
        }
    })

    return (
        <div>
            <div className="bg-[#07332F]">
                <Navbar></Navbar>
                <h1 className="text-4xl font-bold w-11/12 mx-auto py-28">Doctore Profile</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:w-6/12 mx-auto p-3 rounded my-32">
                <div>
                    <img className="h-full rounded" src={doctor.image} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{doctor.name}</h1>
                    <p>{doctor.position}</p>
                    <p>{doctor.location}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;