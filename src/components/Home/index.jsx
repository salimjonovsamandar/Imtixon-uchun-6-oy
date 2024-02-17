import React from 'react'
import styles from "./index.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function index() {
  const [data, setData] = useState([]);
  const Push = useNavigate();

  const handleClick = (id) => {
    Push(`/products/${id}`)

  };

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then(res => res.json())
      .then((el) => {
        setData(el.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  return (
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
        {
          data && data.map((el, index) => {
            return (
              <div onClick={() => handleClick(el.id)} key={index} className={styles.card}>
                <div className={styles.card_img}>
                  <img src={el.attributes.image} />
                </div>
                <div className={styles.card_text}>
                  <h4>{el.attributes.title}</h4>
                  <h5>${el.attributes.price}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default index