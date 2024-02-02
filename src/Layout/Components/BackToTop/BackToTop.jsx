import React, { useState, useEffect } from 'react';
import styles from "./BackToTop.module.scss";

export const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setBackToTop(true);
        } else {
            setBackToTop(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div
            className={`${styles.backToTop} ${backToTop ? styles.show : ''}`}
            onClick={scrollToTop}
        >
            <span></span>
            <p>Back To Top</p>
        </div>
    );
};
