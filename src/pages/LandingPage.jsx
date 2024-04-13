import './LandingPage.css';
import './LandingPageMediaQueries.css';

// import ContactUs from '../component/ContactUs/ContactUs';

import Header from '../component/Header/Header';
import AboutAndServices from '../component/about/AboutAndServices';

import DownloadApp from '../component/DownloadApp/DownloadApp';
// import Footer from '../component/Footer/Footer';
import Gallery from '../component/Gallery/Gallery';
// import Testimonial from '../component/Testimonial/Testimonial';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <AboutAndServices />
      <Gallery />
      <DownloadApp />
      {/* <Testimonial /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
