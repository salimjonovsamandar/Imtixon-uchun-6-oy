import React from "react";
import styles from "./index.module.css";

function index() {
    return <div className={styles.about}>
        <div className={styles.text}>
            <h3 className={styles.h3}>We love</h3><div className={styles.confy}>comfy</div>
        </div>
        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
    </div>;
}

export default index;
