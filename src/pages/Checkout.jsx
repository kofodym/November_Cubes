import React from 'react';
import './Checkout.css';
import BackToMenu from '../component/BackToMenu/BackToMenu.jsx';
import ChangeIcon from '../assets/Arrow_Reload_02.svg';
import BankIcon from '../assets/Icon.svg';
import MasterCard from '../assets/MasterCard.svg';
import Verve from '../assets/Frame 427321660.svg';
import Visa from '../assets/Visa.svg';
import Cash from '../assets/cash.svg';
import CardImage from '../assets/card-num-image.svg';
import CvvImage from '../assets/Vector (3).svg';
import G2 from '../app/assests/images/GalleryImages/G2.png';
import Macaroni from '../assets/macaroni.svg';
import Wine from '../assets/wine.svg';
import Toggle from '../component/Toggle/Toggle.jsx';

import DownloadIcon from '../assets/Download_Package.svg';
import SearchBar from '../component/SearchBar/SearchBar.jsx';

const Checkout = () => {
  const handlePayNow = () => {
    // Implement payment logic here
    window.alert('Your order is on the way!');
  };
  return (
    <div>
      <SearchBar />
      <BackToMenu />
      <div className="checkout-container">
        <div className="payment-method">
          <h2 className="checkout-header">Checkout</h2>
          <div className="checkout-items">
            {/* delivery method k*/}
            <p className="delivery-method-heading">Select Delivery Method </p>
            {/* <div className="delivery-method"> */}
            <form action="" className="delivery-method-form">
              <div className="delivery-method">
                <div className="door-delivery">
                  <label className="delivery-label" htmlFor="">
                    Door Delivery
                  </label>
                  <p>Estimated Delivery in 30-40minutes</p>
                </div>
                <input
                  type="radio"
                  className="door-button"
                  name="delivery-method"
                  id="delivery-method"
                />
              </div>
              <div className="pick-up">
                <label className="delivery-label" htmlFor="">
                  Pickup from Restaurant
                </label>
                <input
                  type="radio"
                  className="door-button"
                  name="delivery-method"
                  id="delivery-method"
                />
              </div>
            </form>

            {/* delivery details */}
            <p className="delivery-details-heading">Delivery Details </p>
            <div className="delivery-details">
              <div className="door-delivery">
                <p>
                  Plot 1, Kapital Street, Area 11, <br /> Garki. PMB 24 FCT
                  Abuja
                </p>
                <p>+234903457898</p>
              </div>
              <div className="change-address">
                <img src={ChangeIcon} alt="" />
                <div>CHANGE</div>
              </div>
            </div>
            {/* Payment Details */}
            <p className="delivery-method-heading">Payment Details </p>
            <form action="" className="payment-method-form">
              <div className="bank-transfer">
                <div className="bank-group">
                  <img src={BankIcon} className="bank-icon" alt="" />

                  <label className="payment-label" htmlFor="">
                    Bank Transfer
                  </label>
                </div>
                <input
                  type="radio"
                  className="payment-button"
                  name="payment-method"
                  id="payment-method"
                />
              </div>
              <div className="master-card">
                <img className="bank-icon2" src={MasterCard} alt="" />
                <input
                  type="radio"
                  className="payment-button"
                  name="payment-method"
                  id="payment-method"
                />
              </div>
              <div className="master-card">
                <img className="bank-icon2" src={Verve} alt="" />
                <input
                  type="radio"
                  className="payment-button"
                  name="payment-method"
                  id="payment-method"
                />
              </div>
              <div className="master-card">
                <img className="bank-icon2" src={Visa} alt="" />
                <input
                  type="radio"
                  className="payment-button"
                  name="payment-method"
                  id="payment-method"
                />
              </div>
              <div className="bank-transfer">
                <div className="bank-group">
                  <img className="bank-icon" src={Cash} alt="" />

                  <label className="payment-label" htmlFor="">
                    Pay with cash
                  </label>
                </div>
                <input
                  type="radio"
                  className="payment-button"
                  name="payment-method"
                  id="payment-method"
                />
              </div>
            </form>

            <form action="" className="card-details-form">
              <div className="card-details">
                <input
                  className="card-details-item "
                  type="text"
                  placeholder="Enter name on card"
                />
                <div className="card-number">
                  <input
                    type="number"
                    placeholder="card number"
                    className="card-details-item "
                  />
                  <img className="card-image" src={CardImage} alt="" />
                </div>
              </div>
              <div className="card-details">
                <input
                  className="card-details-item "
                  type="text"
                  placeholder="MM/YY"
                />
                <div className="cvv-number">
                  <input
                    type="text"
                    placeholder="cvv"
                    className="card-details-item "
                    maxLength={4}
                  />
                  <img className="cvv-image" src={CvvImage} alt="" />
                </div>
              </div>
            </form>
            <Toggle />

            <div className="pay">
              <button className="pay-now" onClick={handlePayNow}>
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* food cart start here */}
        <div className="order">
          <div className="order-group">
            <div className="order1">
              <img className="order-image" src={G2} alt="" />
              <div className="order-items">
                <p className="order-name">Goat Meat Peppersoup</p>
                <p className="order-price">₦ 2500</p>
                <div className="order-update">
                  <button className="minus">-</button>
                  <p className="order-num">0</p>
                  <button className="add">+</button>
                </div>
              </div>
            </div>
            <button className="remove">Remove</button>
          </div>
          {/* order2 */}
          <div className="order-group">
            <div className="order1">
              <img className="order-image" src={Macaroni} alt="" />
              <div className="order-items">
                <p className="order-name">Macaroni</p>
                <p className="order-price">₦ 3500</p>
                <div className="order-update">
                  <button className="minus">-</button>
                  <p className="order-num">0</p>
                  <button className="add">+</button>
                </div>
              </div>
            </div>
            <button className="remove">Remove</button>
          </div>

          {/* order 3 */}
          <div className="order-group">
            <div className="order1">
              <img className="order-image" src={Wine} alt="" />
              <div className="order-items">
                <p className="order-name">Mojito Drinks</p>
                <p className="order-price">₦ 3000</p>
                <div className="order-update">
                  <button className="minus">-</button>
                  <p className="order-num">0</p>
                  <button className="add">+</button>
                </div>
              </div>
            </div>
            <button className="remove">Remove</button>
          </div>
          {/* cart stoppes here */}
          <div className="pending-payment">
            <div className="order-payment">
              <p className="date">25/4/2024</p>
              <button className="payment-status">Payment Pending</button>
            </div>
            <p>
              1 x Mojilto drinks - <b>₦ 3000</b>
            </p>
            <p>
              1 x GoatMeat Peppersoup - <b>₦ 2500</b>
            </p>
            <p>
              2 x Macaroni - <b>₦ 3500</b>
            </p>

            <div className="order-payment1">
              <p>Tax (0.5%)</p>
              <p>
                <b>₦ 57.5</b>
              </p>
            </div>
            <div className="order-payment">
              <p>Delivery Fee</p>
              <p>
                <b>₦ 500</b>
              </p>
            </div>
            <div className="order-payment">
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>₦ 12,058</b>
              </p>
            </div>
          </div>

          {/* order stop here */}
          <div className="download">
            <button>Download invoice</button>
            <img src={DownloadIcon} alt="" />
          </div>
        </div>
      </div>
      <BackToMenu />
    </div>
  );
};

export default Checkout;
