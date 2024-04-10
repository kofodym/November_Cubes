import style from "../DownloadApp/DownloadApp.module.css";
import Phone from "../../app/assests/images/ApplePlayStore.png";
import GooglePlayStore from "../../app/assests/images/GooglePlayStore.png";
import AppleStore from "../../app/assests/images/iPhone13.png";

const DownloadApp = () => {
  return (
    <div className={style["download"]}>
      <div className={style["download-text"]}>
        <div className="">
          <span>
            <h2>Download</h2>
          </span>
          <h2>Our App TODAY!</h2>
          <p>
            Skip the line and order your favorite dishes straight from your
            Mobile Phone for pickup or delivery.
          </p>
        </div>
        <div>
          <img src="GooglePlayStore" alt="GooglePlayStore" />
          <img src="AppleStore" alt="AppleStore" />
        </div>
      </div>
      <div className={style["download-img"]}>
        <img src={Phone} alt="Phone" />
      </div>
    </div>
  );
};

export default DownloadApp;
