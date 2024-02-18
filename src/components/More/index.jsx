import React, { useEffect, useState, useMemo } from 'react';
import styles from "./index.module.css";
import { useParams } from 'react-router-dom';
import Loader from "../Loader";

function Index() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //Shu yerda useMemo dan foydalanganman
    const fetchData = useMemo(() => {
        return () => {
            fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
                .then(res => res.json())
                .then((el) => {
                    setData(el.data.attributes);
                    setLoading(false);
                    console.log(el.data.attributes);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, [id]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles.container}>
                    <img src={data.image} alt="" />
                    <div className={styles.description}>
                        <h2>{data.title}</h2>
                        <h3>{data.company}</h3>
                        <h4>${data.price}</h4>
                        <p>{data.description}</p>
                        <h5><b>Colors</b></h5>
                        <div className={styles.colors}>
                            {data.colors && data.colors.map((el, index) => (
                                <div key={index} className={styles.color} style={{ backgroundColor: el }} />
                            ))}
                        </div>
                        <h5><b>Amount</b></h5>
                        <div className={styles.selects}>
                            <select defaultValue="1" className="select select-primary w-full max-w-xs">
                                {[...Array(20).keys()].map(num => (
                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                ))}
                            </select>
                            <button className="btn btn-primary mt-12 mb-12 w-44">ADD TO BAG</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Index;
