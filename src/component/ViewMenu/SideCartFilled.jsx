import React from "react";
import { Link } from "react-router-dom";

const SideCartFilled = ({ cartItems }) => {
  return (
    <div className="side-cart-filled">
      <h2 className="text-center">My Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item d-flex g-1">
            <div className="cart-item-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="cart-item-details">
              <h3 className="product-name">{item.name}</h3>
              <h4 className="product-price">{item.price}</h4>
              <div className="cart-item-controls">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Checkout Button */}
      <Link to="/checkout">
        {cartItems.length > 0 && (
          <button className="checkout-btn">Checkout</button>
        )}
      </Link>
    </div>
  );
};

export default SideCartFilled;
