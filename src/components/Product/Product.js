import React from "react";
import "./Product.css";
import icon from "../../images/cart-plus.svg";

const Product = (props) => {
  console.log(props.product);
  const { ratings, seller, img, name, price } = props.product;
  return (
    <div className="product border rounded-1">
      <div className="product-data">
        <img className="product-image rounded-1" src={img} alt="" />
        <div className="product-data-wrapper">
          <div className="product-info">
            <p className="product-name">{name.toLowerCase()}</p>
          </div>
          <div className="product-meta">
            <p className="product-price">Price: {price}$</p>
            <p className="product-seller">Manufacturer :{seller}</p>
            <p className="product-rating">Rating: {ratings} Star</p>
          </div>
        </div>
      </div>
      <div className="add-to-cart">
        <button className="btn add-to-cart-btn">
          Add To Cart{" "}
          <img className="add-to-cart-btn-icon" src={icon} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default Product;
