// mobile.tsx

import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logokhajourney.svg';
import Link from 'next/link';
import styles from '@/components/fix/style/thememobile.module.css'
<style />

const MobileNavbar: React.FC = () => {
    return (
        <nav className={styles.navbarMobile}>
            <ul className={styles.menuMobile}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
            </ul>
        </nav>
    );
};

export default MobileNavbar;
