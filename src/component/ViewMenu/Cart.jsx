import React, { useEffect, useState } from "react";
import SideCartEmpty from "./SideCartEmpty";
import SideCartFilled from "./SideCartFilled";
import "../../pages/Menu.css";

const Cart = ({ cartItems, setCartItems }) => {
  const handleIncrement = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="side-carts">
      <h2 className="text-center cart-title">My Cart</h2>
      <div className="inner-cart">
        {cartItems.length === 0 ? (
          <SideCartEmpty />
        ) : (
          <SideCartFilled
            cartItems={cartItems}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            removeFromCart={removeFromCart}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
