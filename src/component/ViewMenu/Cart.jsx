import React from "react";
// import { Link } from "react-router-dom";
import SideCartEmpty from "./SideCartEmpty";
import SideCartFilled from "./SideCartFilled";
import "../../pages/Menu.css";

// import Cart from "../component/ViewMenu/Cart";

const Cart = ({ cartItems }) => {

    return (
      <div className="side-carts">
        <h2 className="text-center">My Cart</h2>

        {cartItems.length === 0 ? (
          <SideCartEmpty />
        ) : (
          <SideCartFilled cartItems={cartItems} />
        )}
      </div>
    );
};

export default Cart;
