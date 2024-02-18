import React from 'react'
import styles from "./index.module.css";

function index() {
    return (
        <div className={styles.loader}>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-xs"></span>
        </div>
    )
}
export default index