import React from 'react'
import styles from "./index.module.css";
import { NavLink, } from "react-router-dom";
import { useState } from 'react';

import Loader from "../Loader"
import Cards from "../Home/Cards"

function index() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div>
      {
        loading ? <Loader /> : (
          <>
            <div className={styles.container}>
              <div className={styles.main}>
                <div className={styles.main_title}>
                  <h3>We are changing the way people shop</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                  <NavLink className={styles.button} to="/Products"> Our Products </NavLink>
                </div>
                <div className={styles.main_slider}>
                  <div className="carousel carousel-center  max-w-xl p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                      <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" className={styles.rounded_box} />
                    </div>
                    <div className="carousel-item">
                      <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" className={styles.rounded_box} />
                    </div>
                    <div className="carousel-item">
                      <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" className={styles.rounded_box} />
                    </div>
                    <div className="carousel-item">
                      <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" className={styles.rounded_box} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.main_section}>
                <h2>Featured products</h2>
              </div>
              <div className={styles.wrapper}>
                <Cards></Cards>
              </div>
            </div>
          </>
        )
      }
    </div >
  )
}

export default index