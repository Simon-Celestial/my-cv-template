import React from 'react'
import styles from "./Home.module.scss";
import {MouseFollower} from "../Components/MouseFollower/MouseFollower.jsx";
import {SelfWritingText} from "../Components/SelfWritingText/SelfWritingText.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGraduationCap, faLaptopCode} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {


    return (
        <section className={styles.pageWrapper}>
            <MouseFollower />
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
                        <SelfWritingText />
                        <h2>Gasimli Ziya</h2>
                        <h3>Hi there! This is my<span> personal</span> web spot. As an aspiring Junior Front End
                            <span> Developer</span>, I am eager to embark on a dynamic journey of growth in
                            the world of web<span> development</span>. Get to know me a bit, and if you're curious for
                            more, check out my CV, by clicking the<span> button</span> below. Simple as that!</h3>
                        <a href="../../../public/Assets/Files/GasimliZiyaCV.pdf" download="Gasimli Ziya CV"
                           className={styles.cvButton}>Download CV</a>
                    </div>
                </div>
                <div className={styles.title}>
                    EDUCATION
                    <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className={styles.educationContainer}>
                    <a href="https://www.instagram.com/garageacademy.az/" target="_blank">Garage Academy</a>
                    <h2>Front End Development</h2>
                    <h3>2023.08 - 2024.01</h3>
                </div>
                <div className={styles.educationContainer}>
                    <a href="https://www.instagram.com/evocoding.az/" target="_blank">Evo Coding Center</a>
                    <h2>Front End Development</h2>
                    <h3>2023.02 - 2023.07</h3>
                </div>
                <div className={`${styles.educationContainer} ${styles.last}`}>
                    <a href="https://chdtu.edu.ua/" target="_blank">Cherkasy State Technological University</a>
                    <h2>Bachelor of Management</h2>
                    <h3>2013 - 2018</h3>
                </div>
                <div className={styles.title}>
                    SKILLS
                    <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className={styles.skillsContainer}>
                    <div className={styles.skill}>
                        REACT
                    </div>
                    <div className={styles.skill}>
                        Javascript
                    </div>
                    <div className={styles.skill}>
                        HTML5
                    </div>
                    <div className={styles.skill}>
                        CSS3 (Sass/SCSS, Sass Modules)
                    </div>
                    <div className={styles.skill}>
                        Adaptive and Mobile Design
                    </div>
                    <div className={styles.skill}>
                        Axios
                    </div>
                    <div className={styles.skill}>
                        Context
                    </div>
                    <div className={styles.skill}>
                        Git
                    </div>
                    <div className={styles.skill}>
                        JSON
                    </div>
                    <div className={styles.skill}>
                        Animation and Interaction: CSS and JavaScript
                    </div>
                    <div className={styles.skill}>
                        Basics of MVC
                    </div>
                </div>
                <div className={styles.title}>
                    CONTACT ME
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>

            </div>
        </section>
    )
}

