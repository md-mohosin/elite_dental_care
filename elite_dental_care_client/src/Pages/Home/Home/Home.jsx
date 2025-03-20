import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <div className="bg-[#07332F]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Doctors></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;