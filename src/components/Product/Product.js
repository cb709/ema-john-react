import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({product, handle}) => {
    // console.log(props.handle);
  const { ratings, seller, img, name, price } = product;

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
        <button onClick={()=> handle(product)} className="btn add-to-cart-btn">
          <p>Add To Cart</p>
           <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
