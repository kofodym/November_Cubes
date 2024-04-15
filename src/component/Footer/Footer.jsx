import style from "../Footer/Footer.module.css";
import logo from "../../app/assests/images/ft_logo.png";
import telegram from "../../app/assests/images/telegram.png";
import instagram from "../../app/assests/images/Instagram.png";
import youtube from "../../app/assests/images/youtube.png";

const Footer = () => {
  return (
    <div className={style["footer"]} id="footer">
      <div className={style["footer1"]}>
        <div className='{style["footer-logo-box"]}'>
          <a href="/#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={style["footer-nav"]}>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <div>
              <ul className={style["footer-contact"]}>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="tel:+2348156477263">
                    <p>+2348156477263</p>
                  </a>
                </li>
                <li>
                  <a href="tel:+2349036442727">
                    <p>+2349036442727</p>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={style["footer2"]}>
        <p> &copy; 2024 - November Cubes Copyright. Privacy Policy</p>
        <ul className={style["footer-social"]}>
          <li>
            <a href="/#">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
