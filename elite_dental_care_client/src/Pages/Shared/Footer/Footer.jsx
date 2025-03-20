import { GiFirstAidKit } from "react-icons/gi";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 lg:flex justify-center lg:justify-between lg:p-10">
                <aside className="w-1/3 space-y-3">
                    <div className="flex items-center gap-2">
                        <GiFirstAidKit size={50} color="green"></GiFirstAidKit>
                        <h1 className="text-2xl font-bold"><span className="text-red-500 ">Elite</span> Dental Care</h1>
                    </div>
                    <p>
                    we are dedicated to providing top-quality dental care in a comfortable and patient-focused environment. Our team of skilled professionals is here to help you achieve and maintain a healthy, beautiful smile.
                    </p>
                    <button className="btn btn-outline border border-red-500 text-red-500">Appointment</button>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;