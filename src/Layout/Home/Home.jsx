import React from 'react'
import styles from "./Home.module.scss";

export const Home = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageContent}>
                <div className={styles.myName}>
                    <div className={styles.logoBox}>
                        <p>Z</p>
                    </div>
                    <span>Gasimli <p>Ziya</p></span>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.imageBox}>
                        <img src="../../../public/Assets/Images/myImg.jpg" alt="Me"/>
                        <div className={styles.rotateBlock}></div>
                    </div>
                    <div className={styles.infoContent}>

                    </div>
                </div>

            </div>

        </div>
    )
}
