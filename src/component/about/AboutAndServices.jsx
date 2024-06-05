import './AboutAndServices.css';
import AboutImg from '../../assets/about-img.svg';
import ServiceImg from '../../assets/services.svg';
import TomatoImg from '../../assets/tomato.svg';

export const AboutAndServices = () => {
  return (
    <div className="about-services">
      <section className="about-section" id="about-services">
        <div className="about-text">
          <h2>Your one-stop dining destination...</h2>
          <p className="about-description1">
            Look no further than November Cubes a unique dining destination
            offering the best of both worlds under one roof!
          </p>
          <p className="about-description2">
            <strong>November Cubes</strong> tantalizes your taste buds with a
            delectable selection of intercontinental dishes. From savory noodles
            and sizzling shawarma to fluffy jollof spaghetti and juicy chicken,
            embark on a culinary adventure across continents.
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImg} alt="AboutUs" />
        </div>
      </section>
      <section className="service-section" id="service">
        <div className="service-image">
          <img src={ServiceImg} alt="AboutUs" />
        </div>
        <div className="service-text">
          <h2>Our Services:</h2>
          <p className="service-description1">
            <strong>Catering:</strong> Planning an event? We bring the world to
            you with our outdoor catering options for all kind of events.
          </p>
          <p className="service-description2">
            <strong>Dine In or Take Out:</strong> Craving our intercontinental
            dishes or Mama Ashabis specialties? Enjoy them at our restaurant or
            order for lightning-fast delivery!
          </p>
        </div>
      </section>
      <section className="call-to-action-section" id="cta">
        <div className="CTA">
          <img className="tomato" src={TomatoImg} alt="tomato" />
          <h2>
            Forget the rest, we are the tastiest taste. Order your food
            obsession today!
          </h2>
          <img src={TomatoImg} className="tomato2" alt="tomato" />
        </div>

        <button className="cta-button">Download our App</button>
      </section>
    </div>
  );
};

export default AboutAndServices;
