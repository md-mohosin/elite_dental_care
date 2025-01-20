import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";

const Home = () => {
    return (
        <div>
            <div className="bg-[#07332F]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;