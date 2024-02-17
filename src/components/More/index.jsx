import React from 'react'
import styles from "./index.module.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function index() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
            .then(res => res.json())
            .then((el) => {
                setData(el.data.attributes);
                console.log(el.data.attributes)
            }).catch((err) => {
                console.log(err);
            })
    }, [id])

    return (

        <div className={styles.container} key={index} >
            <img src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className={styles.description}>
                <h2>{data.title}</h2>
                <h3>{data.company}</h3>
                <h4>${data.price}</h4>
                <p>{data.description}</p>
                <h5><b>Colors</b></h5>
                <div className={styles.colors}>
                    {
                        data.colors && data.colors.map((el, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.color}
                                    style={{ backgroundColor: el }}
                                >
                                </div>
                            )
                        })
                    }
                </div>
                <h5><b>Amount</b></h5>
                <div className={styles.selects}>
                    <select defaultValue="1" className="select select-primary w-full max-w-xs">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                    <button className="btn btn-primary mt-12 mb-12 w-44">ADD TO BAG</button>

                </div>
            </div>
        </div >

    )
}

export default index