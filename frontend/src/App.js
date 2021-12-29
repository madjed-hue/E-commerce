import React from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
