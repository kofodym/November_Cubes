import "./LandingPage.css";
import "./LandingPageMediaQueries.css";

import Header from "../component/Header/Header";
import AboutAndServices from "../component/about/AboutAndServices";
import Gallery from "../component/Gallery/Gallery";
import DownloadApp from "../component/DownloadApp/DownloadApp";
import ContactUs from "../component/ContactUs/ContactUs";
import Testimonial from "../component/Testimonial/Testimonial";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <AboutAndServices />
      <Gallery />
      <DownloadApp />
      <Testimonial />
      <ContactUs />
          
    </div>
  );
};

export default LandingPage;
