import React, { useState } from "react";
import SearchBar from "../component/SearchBar/SearchBar";
import ProductsDisplay from "../component/ViewMenu/ProductsDisplay";
// import SideCartEmpty from "../component/ViewMenu/SideCartEmpty";
import SideCartFilled from "../component/ViewMenu/SideCartFilled";
import "../pages/Menu.css";
// import CartPopUp from "../component/ViewMenu/CartPopUp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Menu() {
  // State to track the items added to the cart
  const [cartItems, setCartItems] = useState([]);
  // State to manage the visibility of the side cart component on load
  const [showSideCart, setShowSideCart] = useState(false);

  // State to manage the visibility of the popup
  // const [showPopup, setShowPopup] = useState(false);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems([...cartItems, product]);

    // Show the side cart
    setShowSideCart(true);

    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastClassName: "custom-toast",
    });
    // setShowPopup(true); // Show the popup when item is added to cart
    // setTimeout(() => {
    //   setShowPopup(false);
    // }, 2500);
  };

   const toggleSideCartVisibility = () => {
     setShowSideCart(!showSideCart);
   };

   
// const toggleSideCartVisibility = () => {
//   console.log("Clicked cart icon");
//   setSideCartVisible(!sideCartVisible);
// };


  return (
    <div className="product">
      {/* SearchBar */}
      <SearchBar toggleSideCartVisibility={toggleSideCartVisibility} />

      {/* Product container */}
      <div className="product-container">
        {/* Category List */}
        <div className="category-list">
          <ul>
            <li>All</li>
            <li>Food</li>
            <li>Drinks</li>
            <li>Pastries</li>
          </ul>
        </div>

        {/* Product List */}
        <div className="d-flex">
          <ProductsDisplay addToCart={addToCart} />

          {/* Sidebar Cart */}
          <div className="side-cart">
            {/* <SideCartEmpty /> */}
            {/* Display SideCartFilled only if showSideCart is true */}
            {showSideCart && <SideCartFilled cartItems={cartItems} />}

            {/* <SideCartFilled cartItems={cartItems} /> */}
          </div>
        </div>
      </div>
      {/* CartPopUp */}
      {/* <CartPopUp showPopup={showPopup} setShowPopup={setShowPopup} /> */}
      <ToastContainer toastClassName="custom-toast" />
    </div>
  );
}

export default Menu;
