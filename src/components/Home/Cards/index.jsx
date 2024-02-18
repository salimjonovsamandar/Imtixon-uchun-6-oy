import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardInfo } from "../../../App";
import styles from "./index.module.css";

export default function Card() {
    //Shu yerda useContext dan foydalanganman
    const info = useContext(CardInfo);
    return (
        <>
            {info.map((el, index) => {
                return (
                    <Link key={index} className={styles.card} to={`/products/${el.id}`}>
                        <div className={styles.card_img}>
                            <img src={el.attributes.image} />
                        </div>
                        <div className={styles.card_text}>
                            <h4>{el.attributes.title}</h4>
                            <h5>${el.attributes.price}</h5>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}