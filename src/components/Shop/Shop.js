import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
  };

  const [productCount, setProductCount] = useState(6)

  const handleLoadMore = () => {
    setProductCount(productCount + 3);
  };

  return (
    <div className="container shop-container">
      <div>
      <div className="products-container">
        {products.slice(0, productCount).map((product) => (
          <Product
            key={product.id}
            product={product}
            handle={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="load-more">
        <button onClick={() => handleLoadMore()} className="btn load-more-btn">
          Load More
        </button>
      </div>
      </div>
      <div className="cart-container border">This is cart</div>
    </div>
  );
};

export default Shop;
