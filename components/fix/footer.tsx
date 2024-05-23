import Logo from '@/public/logokhajourney.svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src={Logo} alt="logo" width={60} height={60} />
                    <p className="ml-4 mt-2">khajourney.com @reserved for you</p>
                </div>
                <div className="flex flex-wrap justify-around w-full md:w-auto md:ml-auto">
                    <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
                        <p className="mt-4">Chegg Products & Services</p>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">Chegg Study Help</a></li>
                            <li><a href="#" className="hover:underline">Citation Generator</a></li>
                            <li><a href="#" className="hover:underline">Digital Access Codes</a></li>
                            <li><a href="#" className="hover:underline">Grammar Checker</a></li>
                            <li><a href="#" className="hover:underline">Chegg Math Solver</a></li>
                            <li><a href="#" className="hover:underline">Mobile Apps</a></li>
                            <li><a href="#" className="hover:underline">Solutions Manual</a></li>
                            <li><a href="#" className="hover:underline">Plagiarism Checker</a></li>
                            <li><a href="#" className="hover:underline">Chegg Perks</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
                        <p className="mt-4">Company</p>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">About Chegg</a></li>
                            <li><a href="#" className="hover:underline">Chegg For Good</a></li>
                            <li><a href="#" className="hover:underline">College Marketing</a></li>
                            <li><a href="#" className="hover:underline">Investor Relations</a></li>
                            <li><a href="#" className="hover:underline">Jobs</a></li>
                            <li><a href="#" className="hover:underline">Join Our Affiliate Program</a></li>
                            <li><a href="#" className="hover:underline">Media Center</a></li>
                            <li><a href="#" className="hover:underline">Site Map</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
                        <p className="mt-4">Chegg Network</p>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">Busuu</a></li>
                            <li><a href="#" className="hover:underline">Citation </a></li>
                            <li><a href="#" className="hover:underline">EasyBib</a></li>
                            <li><a href="#" className="hover:underline">Mathway</a></li>
                            <li><a href="#" className="hover:underline">Thinkful</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
