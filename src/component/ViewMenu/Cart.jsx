import React from "react";
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

  const  totalPrice = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { quantity: item.quantity + 1 } : item
      )
    );
  };

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
