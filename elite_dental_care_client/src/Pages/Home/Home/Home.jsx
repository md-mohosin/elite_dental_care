import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Doctors from "../Doctors/Doctors";
import Reviews from "../Reviews/Reviews";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <div className="bg-[#07332F]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Service></Service>
            <Doctors></Doctors>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;