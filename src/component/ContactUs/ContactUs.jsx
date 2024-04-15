import style from "../ContactUs/ContactUs.module.css";
import email from "../../app/assests/images/icon_email.svg";
import phone from "../../app/assests/images/icon_call.svg";
import instagram from "../../app/assests/images/icon_instagram.svg";
import facebook from "../../app/assests/images/icon_facebook.svg";
import whatsapp from "../../app/assests/images/icon_whatsapp.svg";
import location from "../../app/assests/images/icon_location.svg";

const ContactUs = () => {
  return (
    <div id="contact-us" className={style["contact"]}>
      <div className={style["contact-header"]}>
        <h2>Get In Touch</h2>
        <p>
          Feel free to reach out if you have any questions, feedback, or special
          requests
        </p>
      </div>

      <div className={style["contact-box"]}>
        <div className={style["contact-info-box"]}>
          <div className={style["contact-info-details"]}>
            <h2>Contact Information</h2>
            <div className={style["email"]} id="email">
              <img src={email} alt="email icon" srcset="" />
              <p>
                <a href="mailto:">info@novembercubesgrillsandtakeout.com</a>
              </p>
            </div>
            <div id="phone">
              <img src={phone} alt="telephone icon" srcset="" />
              <div className={style["phone-nums"]}>
                <p>
                  <a href="tel:+234856477263">+234 856477263</a>
                </p>
                <p>
                  <a href="tel:+2349036442727">+234 9036442727</a>
                </p>
              </div>
            </div>
            <div id="email">
              <img src={location} alt="location icon" />
              <p>No.1 Mambolo Street, beside Mambolo Mall Wuse Zone 2, Abuja</p>
            </div>
            <div>
              <img src={instagram} alt="Instagram" />
              <p>
                <a href="http://https://www.instagram.com/novembercubes_abuja/">
                  novembercubes_abuja
                </a>
              </p>
            </div>
            <div>
              <img src={facebook} alt="" />
              <p>
                <a
                  href="https://web.facebook.com/p/November-Cubes-Grills
-and-Take-Out-100078121899069/?_rdc=1&_rdr"
                >
                  November-Cubes-Grills-and-Take-Out
                </a>
              </p>
            </div>
            <div>
              <img src={whatsapp} alt="Whatsapp" srcset="" />
              <p>
                <a href="https://wa.me/message/CTDVD3BB3YZWK1">WhatsApp Line</a>
              </p>
            </div>
          </div>
        </div>
        <div className={style["contact-form-box"]}>
          <div className={style["contact-form"]}>
            <form action="">
              <h3>Need More Information? Drop a Message </h3>

              <label htmlFor="text">
                <h4>Name</h4>
                <input type="text" id="text" />
              </label>
              <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="message">
                <h4>
                  <span>Message</span>
                </h4>
              </label>
              <textarea
                name="textarea"
                placeholder="write here your Message"
                id="textarea"
                cols="20"
                rows="5"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
