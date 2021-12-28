import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-star-rating-component";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const { id } = useParams();

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProductDetails(id));
  }, [dispatch, error, id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "yellow",
    size: "large",
    value: product.ratings,
    isHalf: true,
  };

  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  src={item.url}
                  className="CarouselImage"
                  key={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
          <p>Product # {product._id}</p>
        </div>
        <div className="detailsBlock-2">
          <ReactStars {...options} />
          <span className="detailsBlock-2-span">
            ({product.numOfReviews} Reviews)
          </span>
        </div>
        <div className="detailsBlock-3">
          <h1>{`₹${product.price}`}</h1>
          <div className="detailsBlock-3-1">
            <div className="detailsBlock-3-1-1">
              <button>-</button>
              <input readOnly type="number" />
              <button>+</button>
            </div>
            <button disabled={product.Stock < 1 ? true : false}>
              Add to Cart
            </button>
          </div>

          <p>
            Status:
            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
              {product.Stock < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>
        </div>
        <div className="detailsBlock-4">
          Description : <p>{product.description}</p>
        </div>
        <button className="submitReview">Submit Review</button>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
