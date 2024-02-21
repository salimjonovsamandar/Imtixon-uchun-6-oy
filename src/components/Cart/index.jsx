import React from 'react'
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";

function index() {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>{t("empty")}</h3>
            </div>
            <div className={styles.card_wrapper}>
                <div className={styles.img}>
                    <img src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
                <div className={styles.description}>
                    <h3>Comfy bed</h3>
                    <h4>Homestead</h4>
                    <h5>color : <span></span></h5>
                </div>
                <div className={styles.size}>
                    <h4>Amount</h4>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className={styles.price}>
                    <h6>$129.99</h6>
                </div>
            </div>

        </div>
    )
}
export default index