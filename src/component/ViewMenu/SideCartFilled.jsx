import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Menu.css";

const SideCartFilled = ({
  cartItems,
  handleIncrement,
  handleDecrement,
  removeFromCart,
  totalPrice,
}) => {
  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item d-flex g-1">
          <div className="cart-item-image">
            <img src={item.image} alt={item.alt} className="cart-item-images" />
          </div>
          <div className="cart-item-details">
            <div>
              <h3 className="product-name">{item.name}</h3>
              {/* <br /> */}
              <h4 className="product-price">
                <span>&#8358;</span>&nbsp;{item.price}
              </h4>
            </div>

            <div className="cart-item-controls">
              <div className="d-flex">
                <button
                  type="button"
                  className="addItem"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="item-quantity">{item.quantity}</span>
                <button
                  type="button"
                  className="removeItem"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <span className="deleteItem" onClick={() => removeFromCart(item)}>
                Remove
              </span>
            </div>
          </div>
        </div>
      ))}
      <div>
        <h4>Total</h4>
        {totalPrice}
      </div>

      {/* link that redirects to checkout page */}
      <Link to="/checkout">
        {cartItems.length > 0 && (
          <button className="checkout-btn">Checkout</button>
        )}
      </Link>
    </div>
  );
};

export default SideCartFilled;
