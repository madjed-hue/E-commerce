import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product";

const product = {
  name: "Oil Pump",
  images: [
    {
      url: "https://image.made-in-china.com/202f0j00ikSUgAzWCYoe/Diesel-Spare-Parts-for-Wd12-Engine-Oil-Pump-612600070299.webp",
    },
  ],
  price: "30000 DA",
  _id: "madjed",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome To Sahouane Engine Store</p>
        <h1>Find Amamzing Product Bellow</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
