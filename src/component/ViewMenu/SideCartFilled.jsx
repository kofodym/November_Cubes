import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../pages/Menu.css";

const SideCartFilled = ({ cartItems, setCartItems }) => {
  // State variable to track the quantity of each item
  const [itemQuantities, setItemQuantities] = useState(
    cartItems.map(() => 1) // Initialize all quantities to 1
  );

  // Increment Function to handle adding an item
  const addItem = (index) => {
    const newQuantities = [...itemQuantities];
    newQuantities[index] += 1;
    setItemQuantities(newQuantities);

    // Update the total price of the item
    const updatedCartItems = cartItems.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          totalPrice: item.price * newQuantities[idx],
        };
      }
      return item;
    });
    // end price update

    setCartItems(updatedCartItems);
  };

  // };

  // Function to handle removing an item
  const removeItem = (index) => {
    if (itemQuantities[index] > 1) {
      const newQuantities = [...itemQuantities];
      newQuantities[index] -= 1;
      setItemQuantities(newQuantities);
    }
  };

  const deleteItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setItemQuantities(itemQuantities.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item d-flex g-1">
            <div className="cart-item-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="cart-item-details">
              <h3 className="product-name">{item.name}</h3>

              <h4 className="product-price">
                <span>&#8358;</span>&nbsp;{item.price}
              </h4>
              <div className="cart-item-controls d-flex align-items-center justify-content-center">
                <button className="addItem" onClick={() => removeItem(index)}>
                  -
                </button>
                <span>{itemQuantities[index]}</span>
                <button className="removeItem" onClick={() => addItem(index)}>
                  +
                </button>

                <span className="deleteItem" onClick={() => deleteItem(index)}>
                  Remove
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Checkout Button */}
      <Link to="/checkout">
        {cartItems.length > 0 && (
          <button className="checkout-btn">Checkout</button>
        )}
      </Link>
    </div>
  );
};

export default SideCartFilled;
