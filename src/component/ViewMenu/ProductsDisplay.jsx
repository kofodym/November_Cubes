import React, { useState } from 'react';
import '../../pages/Menu.css'; // Import your CSS file for styling
import { MenuData } from './MenuData'; // Import the menu data
import { MdOutlineFavoriteBorder } from 'react-icons/md';
//import { IoMdAddCircle } from 'react-icons/io';

const ProductDisplay = () => {
  // Receive addToCart as a prop
  // product data
  const products = MenuData;

  // State to track the items added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className="product-item-container">
            <img
              src={product.image}
              alt={product.alt}
              className="product-image"
            />
            <div className="product-desc">
              <div className="product-title d-flex align-items-center justify-content-between">
                <h3 className="product-name">{product.name}</h3>
                <MdOutlineFavoriteBorder className="favourite-icon" />
              </div>
              <p className="product-subtitle">{product.sub_title}</p>
              <h3 className="product-price">
                <span>&#8358;</span>&nbsp;
                {product.price}
              </h3>
              {/* Use addToCart from props */}
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
