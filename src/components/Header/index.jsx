import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaSun, FaMoon } from 'react-icons/fa'

function index(darkMode) {
    const [language, setLanguage] = useState("uz");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        let language = localStorage.getItem("language");
        if (language) {
            i18n.changeLanguage(language);
            setLanguage(language);
        }
    }, [])

    function handleChange(e) {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
        localStorage.setItem("language", e.target.value);
    }

    function changeMode() {
        if (darkMode.mode) {
            darkMode.change(false)
        } else {
            darkMode.change(true)
        }
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.login}>
                    <NavLink className={styles.guest} to="/">
                        Sign in / Guest
                    </NavLink>
                    <NavLink className={styles.account} to="/">
                        Create Account
                    </NavLink>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <NavLink className={styles.logo} to="/">
                            C
                        </NavLink>
                    </div>
                    <div className={styles.link}>
                        <NavLink className={styles.Navigation} to="/">
                            {t("home")}
                        </NavLink>
                        <NavLink className={styles.Navigation} to="/About">
                            {t("about")}
                        </NavLink>
                        <NavLink className={styles.Navigation} to="/Products">
                            {t("productpage")}
                        </NavLink>
                        <NavLink className={styles.Navigation} to="/Cart">
                            {t("cart")}
                        </NavLink>
                    </div>
                    <div className={styles.dark}>
                        <button onClick={changeMode}>
                            {changeMode ? <FaSun /> : <FaMoon />}
                        </button>

                        <div>
                            <select value={language} onChange={handleChange} className={styles.section}>
                                <option value="en">Eng</option>
                                <option value="uz">O'zb</option>
                                <option value="ru">Rus</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
