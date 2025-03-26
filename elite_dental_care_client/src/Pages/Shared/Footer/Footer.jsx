import { GiFirstAidKit } from "react-icons/gi";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:p-10">
                <aside className="lg:w-1/3 space-y-3">
                    <div className="flex items-center gap-2">
                        <GiFirstAidKit size={50} color="green"></GiFirstAidKit>
                        <h1 className="text-2xl font-bold"><span className="text-red-500 ">Elite</span> Dental Care</h1>
                    </div>
                    <p>
                        we are dedicated to providing top-quality dental care in h1 comfortable and patient-focused environment. Our team of skilled professionals is here to help you achieve and maintain a healthy, beautiful smile.
                    </p>
                    <Link to='/appointment'>
                        <button className="btn btn-outline border border-red-500 text-red-500">Appointment</button>
                    </Link>
                </aside>
                <div className="flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <h1 className="link link-hover">Branding</h1>
                    <h1 className="link link-hover">Design</h1>
                    <h1 className="link link-hover">Marketing</h1>
                    <h1 className="link link-hover">Advertisement</h1>
                </div>
                <div className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <h1 className="link link-hover">About us</h1>
                    <h1 className="link link-hover">Contact</h1>
                    <h1 className="link link-hover">Jobs</h1>
                    <h1 className="link link-hover">Press kit</h1>
                </div>
                <div className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <h1 className="link link-hover">Terms of use</h1>
                    <h1 className="link link-hover">Privacy policy</h1>
                    <h1 className="link link-hover">Cookie policy</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;