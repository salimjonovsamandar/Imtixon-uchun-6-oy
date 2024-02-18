import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./App.css";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import Home from "../src/components/Home";
import Products from "../src/components/Products";
import More from "./components/More";
import NoPages from "../src/components/NoPages";
import useLocalStorageState from 'use-local-storage-state'

export const CardInfo = React.createContext(null)

function App() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([])
  const [mood, setMood] = useLocalStorageState(true)

  //useMemo hooki More papkani ichida ishlatilgan
  // useContext orqali olish uchun shunday qilingan 
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then(res => res.json())
      .then(data => {
        setInfo(data.data)
        setLoading(false);
      })
      .catch(err => console.log(err))
    setLoading(false);
  }, [])

  return (
    <div className="mode" data-theme={mood ? "light" : "dark"}>
      <CardInfo.Provider value={info}>
        <BrowserRouter >
          <Header mode={mood} change={setMood} />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Products" element={<Products></Products>}></Route>
            <Route path="/products/:id" element={<More></More>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
            <Route path="*" element={<NoPages></NoPages>}></Route>
          </Routes>
        </BrowserRouter>
      </CardInfo.Provider>
    </div>
  );
}
export default App;
