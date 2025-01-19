import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <div className="bg-[#07332F]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;