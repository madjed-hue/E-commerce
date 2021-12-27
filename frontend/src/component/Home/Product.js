import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-star-rating-component";

const Product = ({ product }) => {
  const options = {
    edit: false,
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name} </p>
      <div>
        <ReactStars {...options} />{" "}
        <span>({product.numberOfReviews} reviews) </span>
      </div>
      <span>{`${product.price} DA`} </span>
    </Link>
  );
};

export default Product;
