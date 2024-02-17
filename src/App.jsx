import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./App.css";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import Home from "../src/components/Home";
import Products from "../src/components/Products";
import More from "../src/components/More";
import NoPages from "../src/components/NoPages";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/products/:id" element={<More />} />
        <Route path="*" element={<NoPages />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
