import React, { useState } from "react";
import "./menu.css"; // Import your CSS file for styling
import {Menudata} from "./MenuData"
 
const ProductDisplay = () => {
  // Sample product data (replace with your actual data)
  const products = MenuData;

  // State to track the items added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
