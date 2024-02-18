import styles from "./index.module.css";
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Loader from "../Loader"
import { useTranslation } from "react-i18next";

function index() {
  const [filter, setFilter] = useState([]);
  const [price, setPrice] = useState(100000);
  const [change, setchange] = useState(true);
  const Push = useNavigate();
  const searchInput = useRef();
  const categorySelect = useRef();
  const companySelect = useRef();
  const priceRange = useRef();
  const freeShippingCheckbox = useRef();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { t, i18n } = useTranslation();

  //Hamma ma'lumotlarni olib kelish uchun
  function getData() {
    fetch("https://strapi-store-server.onrender.com/api/products?All")
      .then(res => res.json())
      .then((el) => {
        setFilter(el.data)
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }
  useEffect(() => {
    getData()
  }, [])

  //Batafsil oynaga o'tish uchun
  const handleClick = (id) => {
    Push(`/products/${id}`)
  };

  //filter uchun
  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const URL = `https://strapi-store-server.onrender.com/api/products?search=${searchInput.current.value}&category=${categorySelect.current.value}&company=${companySelect.current.value}&order=a-z&price=${priceRange.current.value}&shipping=${freeShippingCheckbox.current.value}`;
      const response = await fetch(URL);
      const data = await response.json();
      setFilter(data.data);

      DeleteInputValue()
    } catch (err) {
      console.log(err);

    }
  }
  useEffect(() => {
  }, [filter])

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  //Inputlarni tozalash uchun
  function DeleteInputValue() {
    searchInput.current.value = ""
    categorySelect.current.value = "all"
    companySelect.current.value = "all"
    priceRange.current.value = "100000"
    freeShippingCheckbox
  }

  //Pagination uchun
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://strapi-store-server.onrender.com/api/products?page=${currentPage}`);
      const data = await response.json();
      setFilter(data.data);
      setTotalPages(3);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      {
        loading ? <Loader /> : (
          <>
            <form className={styles.form}>
              <div className={styles.product}>
                <label >{t("search")}</label>
                <input ref={searchInput} type="text" placeholder="Type here" className="input input-bordered input-sm w-80 " />
              </div>
              <div className={styles.product}>
                <label>{t("category")}</label>
                <select ref={categorySelect} className="select select-bordered select-sm w-80 ">
                  <option value="all">{t("all")}</option>
                  <option value="Tables">{t("tables")}</option>
                  <option value="Chairs">{t("chairs")}</option>
                  <option value="Kids">{t("kids")}</option>
                  <option value="Sofas">{t("sofas")}</option>
                  <option value="Beds">{("beds")}</option>
                </select>
              </div>
              <div className={styles.product}>
                <label>{t("company")}</label>
                <select ref={companySelect} className="select select-bordered select-sm w-80 ">
                  <option value="all">{t("all")}</option>
                  <option value="Modenza">Modenza</option>
                  <option value="Luxora">Luxora</option>
                  <option value="Artifex">Artifex</option>
                  <option value="Comfora">Comfora</option>
                  <option value="Homestead">Homestead</option>
                </select>
              </div>
              <div className={styles.product}>
                <div className={styles.price_top}>
                  <label>{("price")}</label>
                  <label>${price}</label>
                </div>
                <input ref={priceRange} min="0" max="100000" onChange={handleChange} type="range" value={price} className="range range-info range-sm w-64 " />
                <div className={styles.price_bottom}>
                  <label><b>0</b></label>
                  <label><b>$1,000,00</b></label>
                </div>
              </div>
              <div className={styles.checkbox}>
                <p>{t("free")}</p>
                <input type="checkbox" ref={freeShippingCheckbox} className="checkbox checkbox-info " />
              </div>
              <div className={styles.btn}>
                <button onClick={handleFilter} style={{ fontSize: "16px" }} className="btn btn-secondary  w-60">{t("searchBtn")}</button>
                <button onClick={((e) => { e.preventDefault(), getData(), DeleteInputValue() })} style={{ color: "white", fontSize: "16px" }} className="btn btn-info w-60">{t("reset")}</button>
              </div>
            </form>

            <div className={styles.section_container}>
              <div className={styles.changeWrapper}>
                <p>{filter.length} <span><b>{t("productpage")}</b></span></p>
                <div className={styles.changeButtons}>
                  <button
                    onClick={() => {
                      setchange(true);
                    }}
                    type="button"
                    className={change ? "text-xl btn btn-circle btn-sm btn-primary text-primary-content" : "text-xl btn btn-circle btn-sm btn-ghost text-based-content"}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg>
                  </button>
                  <button
                    onClick={() => {
                      setchange(false);
                    }}
                    type="button"
                    className={!change ? "text-xl btn btn-circle btn-sm btn-primary text-primary-content" : "text-xl btn btn-circle btn-sm btn-ghost text-based-content"}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {change ? (<div className={styles.wrapper}>
              {
                filter && filter.map((el, index) => {
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
            </div>) : (<div className={styles.wrappers}>
              {
                filter && filter.map((el, index) => {
                  return (
                    <div onClick={() => handleClick(el.id)} key={index} className={styles.cards}>
                      <div className={styles.card_imgs}>
                        <img src={el.attributes.image} />
                      </div>
                      <div className={styles.card_texts}>
                        <div className={styles.CardTitle}>
                          <h3>{el.attributes.title}</h3>
                          <h4>{el.attributes.company}</h4>
                        </div>
                        <h5>${el.attributes.price}</h5>
                      </div>
                    </div>
                  )
                })
              }
            </div>)}
            <div className={styles.join}>
              <button onClick={previousPage} disabled={currentPage === 1} className="btn btn-outline">Previous</button>
              <button onClick={nextPage} disabled={currentPage === totalPages} className="btn btn-outline btn-success ">Next</button>
            </div>
          </>
        )
      }
    </div >
  );
}

export default index;
