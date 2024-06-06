import React, { useState } from 'react';
import SearchBar from '../component/SearchBar/SearchBar';
import ProductDisplay from '../component/ViewMenu/ProductsDisplay';
import ProductDetails from '../component/ViewMenu/ProductDetails';
import Cart from '../component/ViewMenu/Cart';
// import Categories from "../component/ViewMenu/Categories"
import '../pages/Menu.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

function Menu() {
  const [cartItems, setCartItems] = useState([]);
  const [showSideCart, setShowSideCart] = useState(false);

  const addToCart = product => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setShowSideCart(true);

    toast.success('Item added to cart', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      toastClassName: 'custom-toast',
    });
  };

  const toggleSideCartVisibility = () => {
    setShowSideCart(!showSideCart);
  };

  return (
    <div className="product">
      <SearchBar toggleSideCartVisibility={toggleSideCartVisibility} />
      <div className="product-container">
        {/* <Categories /> */}
        <div className="d-flex">
          <Routes>
            <Route
              path="/"
              element={<ProductDisplay addToCart={addToCart} />}
            />
            <Route
              path="/product/:productId"
              element={<ProductDetails addToCart={addToCart} />}
            />
          </Routes>

          <div className="side-cart d-flex flex-md-column align-items-center justify-content-evenly">
            {showSideCart && (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            )}
          </div>
        </div>
      </div>
      <ToastContainer toastClassName="custom-toast" />
    </div>
  );
}

export default Menu;
