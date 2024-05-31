import React, {useCallback, useState, useEffect} from 'react'
import styles from "./Home.module.scss";
import {MouseFollower} from "../Components/MouseFollower/MouseFollower.jsx";
import {SelfWritingText} from "../Components/SelfWritingText/SelfWritingText.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import skillsData from "/public/Data/skills.json";
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
    faAngleDown,
    faBriefcase,
    faEnvelope,
    faGear,
    faGraduationCap,
    faLanguage,
    faLaptopCode,
    faMobileScreen,
    faLink
} from "@fortawesome/free-solid-svg-icons";
import {BallTriangle} from 'react-loader-spinner';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {BackToTop} from "../Components/BackToTop/BackToTop.jsx";
import clickSound from "/Assets/Sounds/press.mp3";
import {MusicButton} from "../Components/MusicButton/MusicButton.jsx";
import LanguageSelection from "../Components/LanguageSelection/LanguageSelection.jsx";
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from 'swiper/react';

const audio = new Audio(clickSound);

const phoneNumber = '+994 55 828 01 92';
const emailAddress = 'gasimli.ziya@yandex.com';

export const Home = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [loaderActive, setLoaderActive] = useState(true);

    const clickHandler = useCallback(() => {
        setButtonClicked(true);
    }, [buttonClicked]);

    useEffect(() => {
        if (buttonClicked) {
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
            setTimeout(() => {
                setButtonClicked(false);
            }, 3000);
        }
    }, [buttonClicked]);

    useEffect(() => {
        setTimeout(() => {
            setLoaderActive(false);
        }, 3000);

    }, []);

    const {t} = useTranslation();


    return (
        <section className={`${styles.pageWrapper} ${loaderActive ? styles.scrollLock : ""}`}>
            <LanguageSelection/>
            <div className={`${styles.pageLoader} ${!loaderActive ? styles.loaderDisabled : ""}`}>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#C5012E"
                    ariaLabel="ball-triangle-loading"
                    visible={true}
                />
            </div>
            <MusicButton/>
            <BackToTop/>
            <div className={styles.background}></div>
            <MouseFollower/>
            <div className={styles.pageContent}>
                <div className={styles.circlesAnimation}>
                    <div className={styles.smallCircle}></div>
                    <div className={styles.mediumCircle}></div>
                    <div className={styles.bigCircle}></div>
                </div>
                <div className={styles.spinningGears}>
                    <FontAwesomeIcon className={styles.smallGear} icon={faGear}/>
                    <FontAwesomeIcon className={styles.mediumGear} icon={faGear}/>
                    <FontAwesomeIcon className={styles.biGGear} icon={faGear}/>
                </div>
                <div className={styles.myName}>
                    <div className={styles.logoBox}>
                        <p>Z</p>
                    </div>
                    <span>{t('translations.surname')} <p>{t('translations.name')}</p></span>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.imageBox}>
                        <img src="/Assets/Images/myImg.jpg" alt="Me"/>
                        <div className={styles.rotateBlock}></div>
                    </div>
                    <div className={styles.infoContent}>
                        <SelfWritingText/>
                        <h2>{t('translations.surname')} {t('translations.name')}</h2>
                        <h3>{t('translations.hi')}<span>
                            {t('translations.personal')}</span>
                            {t('translations.webSpot')}
                            <span>{t('translations.developer')}</span>
                            {t('translations.iAmEager')}<span> {t('translations.development')}</span>
                            {t('translations.getToKnow')}
                            <span>  {t('translations.button')}</span>
                            {t('translations.below')}</h3>
                        <a href="/Assets/Files/GasimliZiyaCV.pdf" download="Gasimli Ziya CV.pdf"
                           className={`${styles.cvButton} ${buttonClicked ? styles.buttonActive : ""}`}
                           onClick={clickHandler}>
                            <p>{t('translations.downloadCV')}</p>
                            <img src="/Assets/Images/download2.gif" alt="download"/>
                        </a>
                    </div>
                </div>
                <div className={styles.title}>
                    Portfolio
                    <FontAwesomeIcon icon={faBriefcase}/>
                </div>
                <div className={styles.portfolioContainer}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        freeMode={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            1440: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1
                            }
                        }}
                        style={{
                            "--swiper-pagination-color": "#C5012E",
                            "--swiper-pagination-bullet-inactive-color": "black",
                            "--swiper-pagination-bullet-inactive-opacity": "0.5",
                            "--swiper-pagination-bullet-size": "22px",
                            "--swiper-pagination-bullet-horizontal-gap": "5px",
                        }}
                    >
                        <SwiperSlide>
                            <div className={styles.projectCard}>
                                <div className={styles.portfolioImage}>
                                    <img src="/Assets/Images/portfolioFirst.png" alt="Portfolio"/>
                                </div>
                                <div className={styles.portfolioTitle}>
                                    <p>Project: <span>EasyEat E-Commerce</span></p>
                                    <p><h2>
                                        E-Commerce website related to food delivery,
                                        with filtering,sorting,shopping cart, wish list, admin panel, and etc.
                                    </h2></p>
                                    <p>
                                        <a href="https://easy-east.netlify.app/" target="_blank"> <FontAwesomeIcon icon={faLink} /> Visit website</a>
                                    </p>
                                    <p>
                                        <a href="https://github.com/Simon-Celestial/easy-eat-ecommerce" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} /> Source Code
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.projectCard} ${styles.notAvailable}`}>
                                <p>Under Development</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.projectCard} ${styles.notAvailable}`}>
                                <p>Under Development</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.projectCard} ${styles.notAvailable}`}>
                                <p>Under Development</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
                <div className={styles.title}>
                    {t('translations.work')}
                    <FontAwesomeIcon icon={faBriefcase}/>
                </div>
                <div className={`${styles.educationContainer} ${styles.workContainer}`}>
                    <a href="https://www.upwork.com/" target="_blank">
                        <img src="/Assets/Images/upWork.png" alt="Logo"/>
                        Up work</a>
                    <h2> {t('translations.profile')} ( {t('translations.freelance')} )</h2>
                    <h3>2024.05 - {t('translations.now')}</h3>
                </div>
                <div className={`${styles.educationContainer} ${styles.workContainer} ${styles.last}`}>
                    <a href="https://www.instagram.com/garageacademy.az/" target="_blank">
                        <img src="/Assets/Images/garage.png" alt="Logo"/>
                        Garage Academy</a>
                    <h2> {t('translations.profile')} ( {t('translations.mentor')} )</h2>
                    <h3>2024.01 - 2024.05</h3>
                </div>
                <div className={styles.title}>
                    {t('translations.education')}
                    <FontAwesomeIcon icon={faGraduationCap}/>
                </div>
                <div className={styles.educationContainer}>
                    <a href="https://www.instagram.com/garageacademy.az/" target="_blank">
                        <img src="/Assets/Images/garage.png" alt="Logo"/>
                        Garage Academy</a>
                    <h2>{t('translations.profile')}</h2>
                    <h3>2023.08 - 2024.01</h3>
                </div>
                <div className={styles.educationContainer}>
                    <a href="https://www.instagram.com/evocoding.az/" target="_blank">
                        <img src="/Assets/Images/evo.png" alt="Logo"/>
                        Evo Coding Center</a>
                    <h2>{t('translations.profile')}</h2>
                    <h3>2023.02 - 2023.07</h3>
                </div>
                <div className={`${styles.educationContainer} ${styles.last}`}>
                    <a href="https://chdtu.edu.ua/" target="_blank">
                        <img src="/Assets/Images/uniLogo.png" alt="Logo"/>
                        {t('translations.university')}</a>
                    <h2>{t('translations.bachelor')}</h2>
                    <h3>2013 - 2018</h3>
                </div>
                <div className={styles.title}>
                    {t('translations.languages')}
                    <FontAwesomeIcon icon={faLanguage}/>
                </div>
                <div className={styles.languageContainer}>
                    <p>{t('translations.english')}</p>
                    <p>{t('translations.azerbaijani')}</p>
                    <p>{t('translations.russian')}</p>
                    <p>{t('translations.turkish')}</p>
                </div>
                <div className={styles.title}>
                    {t('translations.skills')}
                    <FontAwesomeIcon icon={faLaptopCode}/>
                </div>
                <div className={styles.skillsContainer}>
                    {skillsData?.map((skills) => {
                        return (
                            <div key={skills?.id} className={styles.skill}>
                                {skills?.name}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.title}>
                    {t('translations.contactMe')}
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <div className={styles.contactMe}>
                    <div className={styles.contactColumn}>
                        <div className={styles.contactRow}>
                            <FontAwesomeIcon icon={faMobileScreen}/>
                            <a href={`tel:${phoneNumber}`} target="_blank">{phoneNumber}</a>
                        </div>
                        <div className={styles.contactRow}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <a href={`mailto:${emailAddress}`} target="_blank">{emailAddress}</a></div>
                    </div>
                    <div className={styles.contactColumn}>
                        <div className={styles.contactRow}>
                            <FontAwesomeIcon icon={faGithub}/>
                            <a href="https://github.com/Simon-Celestial" target="_blank">GitHub</a>
                        </div>
                        <div className={styles.contactRow}>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            <a href="https://www.linkedin.com/in/ziya-gasimli/" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

