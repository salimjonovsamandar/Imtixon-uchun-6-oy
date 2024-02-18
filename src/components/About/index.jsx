import React from "react";
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";

function index() {
    const { t, i18n } = useTranslation();

    return <div className={styles.about}>
        <div className={styles.text}>
            <h3 className={styles.h3}>{t("we")}</h3><div className={styles.confy}>{t("comfy")}</div>
        </div>
        <p className={styles.p}>{t("desc")}</p>
    </div>;
}

export default index;
