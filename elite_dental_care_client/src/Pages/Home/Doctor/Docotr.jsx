import { FaDollarSign } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";


const Docotr = ({ doctor }) => {
    const { _id, image, name, position, location, available_date, price } = doctor





    return (
        <div>
            <div className="p-2 bg-base-100 rounded border w-full space-y-4">
                <div>
                    <img
                        className="w-full rounded"
                        src={image}
                        alt="Doctor" />
                </div>
                <div className="space-y-2">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{position}</p>
                    <div className="divider"></div>
                    <p className="flex items-center gap-1"><IoLocation></IoLocation>{location}</p>
                    <p className="flex items-center gap-1"><MdOutlineEventAvailable></MdOutlineEventAvailable>Available on: {available_date}</p>
                    <p className="flex items-center"><FaDollarSign></FaDollarSign>{price}</p>

                    <Link to={`/doctor_details/${_id}`}>
                        <div>
                            <button className="mt-2 btn btn-outline border border-red-400 hover:bg-red-400 w-full">View profile</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Docotr;