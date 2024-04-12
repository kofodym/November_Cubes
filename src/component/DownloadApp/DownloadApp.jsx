import style from "../DownloadApp/DownloadApp.module.css";
import Phone from "../../app/assests/images/iPhone13.png";
import GooglePlayStore from "../../app/assests/images/GooglePlayStore.png";
import AppleStore from "../../app/assests/images/ApplePlayStore.png";

const DownloadApp = () => {
  return (
    <div className={style["download"]}>
      <div className={style["download-text"]}>
        <div className={style["download-text1"]}>
          <span>
            <h2>Download</h2>
          </span>
          <h2>Our App TODAY!</h2>
          <p>
            Skip the line and order your favorite dishes straight from your
            Mobile Phone for pickup or delivery.
          </p>
        </div>
        <div className={style["download-logo"]}>
          <div className={style["download-container"]}>
            <img
              src={GooglePlayStore}
              alt="GooglePlayStore"
              className={style["google-play-store"]}
            />
            <img
              src={AppleStore}
              alt="AppleStore"
              className={style["apple-store"]}
            />
          </div>
        </div>
      </div>
      <div className={style["download-img"]}>
        <img src={Phone} alt="Phone" className={style["phone"]} />
      </div>
    </div>
  );
};

export default DownloadApp;
