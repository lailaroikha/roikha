import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logokhajourney.svg';
import MobileNavbar from './mobile-navbar';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Image src={Logo} alt="logo" width={60} height={60} />
            </div>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
            </ul>
            <MobileNavbar />
        </nav>
    );
};

export default Navbar;
