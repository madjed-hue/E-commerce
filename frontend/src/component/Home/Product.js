import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-star-rating-component";

const options = {
  edit: false,
  value: 2.5,
  readOnly: true,
  precision: 0.5,
};

const Product = ({ product }) => {
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name} </p>
      <div>
        <ReactStars {...options} /> <span>(252 reviews) </span>
      </div>
      <span>{product.price} </span>
    </Link>
  );
};

export default Product;
