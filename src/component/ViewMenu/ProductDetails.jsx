import React from "react";
// import { useParams } from "react-router-dom";
// import { MenuData } from "./MenuData";
import "../../pages/Menu.css";

const ProductDetails = ({ product, addToCart, closeModal }) => {
  if (!product) return null;

  return (
    <div className="product-details-modal">
      <div className="product-details-content">
        <button type="button" className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div className="product-details">
          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.alt}
              className="product-image"
            />
          </div>
          <div className="product-details-desc">
            <div className="product-title d-flex flex-column">
              <h3 className="product-name">{product.name}</h3>
              <h3 className="product-price">
                <span>&#8358;</span>&nbsp;{product.price}
              </h3>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-details-categories">
              <h3 className="product-details-category">
                <span>Category:</span>
                {product.category}
              </h3>
              <h3 className="product-details-id">
                <span>Menu ID:</span>
                {product.id}
              </h3>
            </div>
            <button type="button" className="add-to-cart2" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </div>
  );
};

export default ProductDetails;
