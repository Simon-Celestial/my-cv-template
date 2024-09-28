import styles from "./LanguageSelection.module.scss";
import {useCallback, useEffect, useState} from "react";
import languages from "/public/Data/languages.json";
import {useTranslation} from "react-i18next";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const LanguageSelection = () => {
    const [languageOpen, setLanguageOpen] = useState(false);

    const {i18n} = useTranslation();

    const changeLanguageHandler = useCallback((language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }, [i18n]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const languageOpenHandler = useCallback((event) => {
        event.stopPropagation();
        setLanguageOpen(prevState => !prevState);
    }, [setLanguageOpen]);
    //
    const languageClickHandler = (id) => {
        changeLanguageHandler(id);
        setLanguageOpen(false);
    };

    const handleWidgetClose = useCallback((setIsOpen) => {
        setIsOpen(false);
    }, [])

    useEffect(() => {
        const action = () => {
            handleWidgetClose(setLanguageOpen);
        }
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, []);

    return (
        <div className={styles.languageSelection} onClick={languageOpenHandler}>
            <span>
                {
                    i18n.language
                }
            </span>
            <FontAwesomeIcon icon={faAngleDown} className={languageOpen ? styles.rotate : ""}/>
            <div className={`${styles.languageDropdown} ${languageOpen ? styles.languageVisible : ""}`}
                 onClick={e => e.stopPropagation()}>
                {languages.map((language) => {
                    return (
                        <p className={i18n.language === language.id ? styles.selected : ""} key={language.id}
                           onClick={() => languageClickHandler(language.id)}>{language.name}</p>
                    )
                })}
            </div>
        </div>

    )
        ;
};

export default LanguageSelection;