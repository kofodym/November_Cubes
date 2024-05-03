import EmptyEmloji from "../../app/assests/images/MenuImages/for_empty_cart.svg";
// import { Link } from "react-router-dom";
import "../../pages/Menu.css";
function SideCartEmpty() {
  return (
    <div>
      <div className="side-cart-empty d-flex flex-md-column align-items-center">
        <div className="emoji g-md-5  mt-5">
          <img src={EmptyEmloji} alt="smiling yellow emoji" />
        </div>

        <div className="empty-text d-flex flex-md-column text-md-center">
          <h4>My tummy’s rumbling.....yours too?</h4>
          <h4>Let’s fix that!</h4>
        </div>
      </div>
    </div>
  );
}

export default SideCartEmpty;
