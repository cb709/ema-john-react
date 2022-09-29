import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart , clearCart}) => {
    // console.log(cart)
  const quantity = cart.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (previous, current) => previous + parseInt(current.price * current.quantity),
    0
  );
  const totalShipping = cart.reduce(
    (previous, current) => previous + parseInt(current.shipping),
    0
  );
  const tax = totalPrice * 0.1;


  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>
        <strong>Selected Products:</strong> {quantity}
      </p>
      <p>
        <strong>Total Price:</strong> {totalPrice}$
      </p>
      <p>
        <strong>Total Shipping:</strong> {totalShipping}$
      </p>
      <p>
        <strong>Tax:</strong> {tax.toFixed(2)}$
      </p>
      <p>
        <strong>Grand Total:</strong>{" "}
        {(totalPrice + totalShipping + tax).toFixed(2)}$
      </p>

      <button onClick={clearCart} className="btn cart-btn clear-cart-btn">
        <p>Clear Cart</p>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="btn cart-btn review-order-btn">
        <p>Review Order</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
