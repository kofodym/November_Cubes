import React, { useState } from "react";
import "../../pages/Menu.css"; // Import your CSS file for styling
import { MenuData } from "./MenuData"; // Import the menu data
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ProductDetails from "./ProductDetails";
import Categories from "../../component/ViewMenu/Categories";

const ProductDisplay = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = MenuData;

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  //Handles the favourite icon when clicked
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <section className="products flex-column d-flex">
      <div className="categories">
        <Categories />
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item d-flex flex-column gap-3"
          >
            <div className="product-image">
              <img src={product.image} alt={product.alt} className="image" />
            </div>

            <div className="product-desc">
              <div className="product-title  align-items-start justify-content-between d-flex">
                <h3 className="product-name">{product.name}</h3>
                <div
                  className="favourite-icon-wrapper"
                  onClick={handleFavouriteClick}
                >
                  {/* <MdOutlineFavoriteBorder className="favourite-icon" /> */}

                  <MdOutlineFavoriteBorder
                    className={`favourite-icon ${
                      isFavourite ? "favourite-icon-filled" : ""
                    }`}
                    onClick={handleFavouriteClick}
                  />
                </div>
              </div>
              <p className="product-subtitle mt-0">{product.sub_title}</p>
              <div className="product-bottom">
                <h3 className="product-price">
                  <span>&#8358;</span>&nbsp;{product.price}
                </h3>
                <span
                  className="view-more-link"
                  onClick={() => handleViewMore(product)}
                >
                  view more
                </span>
              </div>

              <button
                type="button"
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        {selectedProduct && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <ProductDetails product={selectedProduct} addToCart={addToCart} />
            </div>
          </div>
        )}

        <>
          {/* <button type="button" className="product-more d-flex align-items-center justify-content-center">
            See more
          </button> */}
        </>
      </div>
    </section>
  );
};

export default ProductDisplay;
