import React from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
