'use client'
import React from 'react';
import styles from '@/components/fix/style/thememobile.module.css';


const MobileNavbar: React.FC = () => {
    return (
        <div className={styles.mobileNavbar}>
           
            <ul className={styles.menuMobile}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
            </ul>
        </div>
    );
};

export default MobileNavbar;
