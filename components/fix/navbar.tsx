'use client'

// Navbar.tsx
import React, { useState } from 'react';
import styles from '@/components/fix/style/thememobile.module.css';
import MobileNavbar from '@/components/fix/mobile-navbar';
import Logo from '@/public/logokhajourney.svg'; // path to your logo image
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <a href="/">
                    <Image src={Logo} alt="Logo" width={60} height={60} className={styles.logo} />
                </a>
            </div>
            
            <nav className={styles.navbar}>
                {/* Desktop navigation */}
                <ul className={styles.menu}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                </ul>

                {/* Hamburger menu icon (visible only in mobile) */}
                <div className={styles.toggleButton} onClick={toggleMenu}>
                    ☰
                </div>

                {isMenuOpen && <MobileNavbar />}
            </nav>
        </header>
    );
};

export default Navbar;


