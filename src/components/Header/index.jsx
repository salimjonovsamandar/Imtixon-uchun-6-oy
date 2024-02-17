import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa'


function index({ darkMode, setDarkMode }) {

    const handleDarkModeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={darkMode ? 'darkMode' : ''}>
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
                            Home
                        </NavLink>
                        <NavLink className={styles.Navigation} to="/About">
                            About
                        </NavLink>
                        <NavLink className={styles.Navigation} to="/Products">
                            Products
                        </NavLink>
                        <NavLink className={styles.Navigation} to="/Cart">
                            Cart
                        </NavLink>
                    </div>
                    <div className={styles.dark}>
                        <button onClick={handleDarkModeToggle}>
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>


                        <div>
                            <select className={styles.section}>
                                <option value="uz">O'zb</option>
                                <option value="ru">Rus</option>
                                <option value="en">Eng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
