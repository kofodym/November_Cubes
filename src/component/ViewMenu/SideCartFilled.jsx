
import { Link } from "react-router-dom";

// Define the SideCartFilled component
const SideCartFilled = ({ cartItems }) => {
  return (
    <div className="side-cart-filled">
      <h2 className="text-center">My Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.alt} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.sub_title}</p>
              <h4>{item.price}</h4>
            </div>
          </li>
        ))}
      </ul>
      {/* Checkout Button */}
      <Link to="/checkout">
        <button className="checkout-btn">Checkout</button>
      </Link>
    </div>
  );
};

export default SideCartFilled;
