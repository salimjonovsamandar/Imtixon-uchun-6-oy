import React from 'react'
import styles from "./index.module.css";
import { NavLink } from 'react-router-dom';

function index() {
    return (
        <div className={styles.Pages}>
            <section className={styles.container}>
                <h1 className={styles.heading}> 404 </h1>
                <h3 className={styles.sub_heading}>oops! page not found</h3>
                <NavLink className={styles.button} to="/">HOME PAGES</NavLink>
                <article>
                    Sorry, the page you're looking for doesn't exits. If you think something is broken, report a problem.
                </article>
            </section>
        </div>
    )
}

export default index