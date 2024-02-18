import React from 'react'
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";

function index() {
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3>{t("empty")}</h3>
            </div>
        </div>
    )
}
export default index