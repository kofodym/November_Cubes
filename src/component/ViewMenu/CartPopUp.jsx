import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CartPopUp.css";
import { CiCircleCheck } from "react-icons/ci";

// const CartPopUp = ({ showPopup, setShowPopup }) => {
//   return (
//     showPopup && (
//       <div className="popup-container">
//         <div className="popup text-center d-flex align-items-center justify-content-center">
//           <CiCircleCheck />
//           <div>Item added to cart</div>
//           <button onClick={() => setShowPopup(false)}>Close</button>
//         </div>
//       </div>
//     )
//   );
// };

const CartPopUp = ({ showPopup, setShowPopup }) => {
  const notify = () =>
    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return showPopup ? (
    <div className="popup-container">
      <CiCircleCheck />
      {notify()}
    </div>
  ) : null;
};

export default CartPopUp;
