import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";



function index(darkMode) {
    const [language, setLanguage] = useState("uz");
    const { t, i18n } = useTranslation();
    //Til o'zgatirish uchun yozilgan codlar
    useEffect(() => {
        let language = localStorage.getItem("language");
        if (language) {
            i18n.changeLanguage(language);
            setLanguage(language);
        }
    }, [])

    const cardNum = useSelector(state => state.cards)

    let sumNum = 0
    cardNum.forEach(element => {
        sumNum += element.num
    });

    function handleChange(e) {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
        localStorage.setItem("language", e.target.value);
    }

    //Dark Mood uchun yozilgan codlar
    function changeMode() {
        if (darkMode.mode) {
            darkMode.change(false)
        } else {
            darkMode.change(true)
        }
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.login}>
                    <NavLink className={styles.guest} to="/">Sign in / Guest</NavLink>
                    <NavLink className={styles.account} to="/">Create Account</NavLink>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <NavLink className={styles.logo} to="/">C</NavLink>
                    </div>
                    <div className={styles.link}>
                        <NavLink className={styles.Navigation} to="/">{t("home")}</NavLink>
                        <NavLink className={styles.Navigation} to="/About">{t("about")}</NavLink>
                        <NavLink className={styles.Navigation} to="/Products">{t("productpage")}</NavLink>
                        <NavLink className={styles.Navigation} to="/Cart">{t("cart")}</NavLink>
                    </div>
                    <div className={styles.dark}>
                        <button onClick={changeMode}>
                            <label className="flex cursor-pointer gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label>
                        </button>
                        <NavLink to="/Cart">
                            <div className={styles.basket}>
                                <img src="/cart.svg" />
                                <p>{cardNum.length}</p>
                            </div>
                        </NavLink>
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
        </>
    );
}

export default index;
