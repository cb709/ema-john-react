import React, { useEffect, useState } from "react";
import { addToDb, getStoredData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // get data from api
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const updateCart = () => {
  //   const storedData = getStoredData();
  //   const savedCart = [];
  //   for (const id in storedData) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     if (addedProduct) {
  //       addedProduct.quantity = storedData[id];
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   return savedCart;
  // }

  // get data from local storage
  useEffect(() => {
    const storedData = getStoredData();
    const savedCart = [];
    for (const id in storedData) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedData[id];
        savedCart.push(addedProduct);
      }
    }
    // const savedCart = updateCart()
    setCart(savedCart);
  }, [products]);

  //handle add to cart
  // const handleAddToCart = (product) => {
  //   let newCart = [...cart];
  //   if(newCart.indexOf(product) >= 0){
  //     newCart[newCart.indexOf(product)].quantity++; 
  //   }else {
  //     product.quantity = 1;
  //     newCart.push(product)
  //   }
  //   setCart(newCart);
  //   addToDb(product.id);
  // };

  //handle add to cart method 2 
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    let exists = cart.find(product => product.id === selectedProduct.id)
    if(!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    }else {
      const rest = cart.filter(product => product.id !== selectedProduct.id)
      exists.quantity++;
      newCart = [...rest, exists]
    }
    setCart(newCart)
    addToDb(selectedProduct.id)
  }

  //clearing cart
  const clearCart = () => {
    const newCart = [];
    setCart(newCart);
    localStorage.clear();
  };

  const [productCount, setProductCount] = useState(6);

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
          <button
            onClick={() => handleLoadMore()}
            className="btn border load-more-btn"
          >
            Load More
          </button>
        </div>
      </div>
      <div className="cart-container border">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
