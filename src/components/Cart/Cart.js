import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    console.log(cart)
    const totalPrice = cart.reduce((previous, current) => previous + parseInt(current.price),0);
    const totalShipping = cart.reduce((previous, current) => previous + parseInt(current.shipping),0);
    const tax = (totalPrice * .10);
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p><strong>Selected Products:</strong> {cart.length}</p>
      <p><strong>Total Price:</strong> {totalPrice}$</p>
      <p><strong>Total Shipping:</strong> {totalShipping}$</p>
      <p><strong>Tax:</strong> {tax.toFixed(2)}$</p>
      <p><strong>Grand Total:</strong> {(totalPrice + totalShipping + tax).toFixed(2)}$</p>

      <button className="btn cart-btn clear-cart-btn"> <p>Clear Cart</p><FontAwesomeIcon icon={faShoppingCart} /></button>
      <button className="btn cart-btn review-order-btn"> <p>Review Order</p><FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Cart;
