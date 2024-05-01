import React from 'react';
// import { Carousel, CarouselCaption } from "react-bootstrap";
import '../Testimonial/Testimonial.css';

import profile1 from '../../app/assests/images/peters1.png';
import profile2 from '../../app/assests/images/uche2.png';
import profile3 from '../../app/assests/images/idon3.png';

const Testimonials = () => {
  return (
    // <div className="testimonial">
    <div className="container" id="testimonial">
      <div className="row">
        <div className="col-lg-12">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div id="custom-carousel" className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row-items">
                  <div className="col col-item">
                    <div className="single-box">
                      <div className="img-title">
                        <div className="img-area">
                          <img src={profile1} alt="profile1" />
                        </div>

                        <h2 className="name">Miracle Peters</h2>
                      </div>
                      <div className="img-text">
                        <p id="text">
                          Wow! November Cubes & Mama Ashabi was a delightful
                          surprise. I had the jerk chicken from November Cubes
                          and pounded yam with egusi stew from Mama Ashabi -
                          both were incredible! A must-try for anyone looking
                          for something different.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-item">
                    <div className="single-box">
                      <div className="img-title">
                        <div className="img-area">
                          <img src={profile2} alt="profile2" />
                        </div>

                        <h2 className="name">Uche Agu</h2>
                      </div>
                      <div className="img-text">
                        <p id="text">
                          An epicurean delight! November Cubes intercontinental
                          offerings are a feast for the senses, showcasing the
                          finest flavors from around the world.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col col-item">
                    <div className="single-box ">
                      <div className="img-title">
                        <div className="img-area">
                          <img src={profile3} alt="profile3" />
                        </div>

                        <h2 className="name">Idongesit Usoro</h2>
                      </div>
                      <div className="img-text">
                        <p id="text">
                          Mama Ashabi s corner is a taste of home! Their
                          authentic Nigerian dishes evoke memories of family
                          gatherings and traditional feasts.",
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* another carousel */}
              <div className="carousel-item">
                <div className="row-items">
                  <div className="col col-item">
                    <div className="single-box">
                      <div className="img-title">
                        <div className="img-area">
                          <img src={profile1} alt="profile1" />
                        </div>

                        <h2 className="name">Usman Bilikis</h2>
                      </div>
                      <div className="img-text">
                        <p id="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Distinctio harum mollitia sit libero soluta.
                          Totam ad veritatis odit molestias laudantium aperiam
                          quod esse perferendis! Facilis veniam harum sit
                          laudantium perspiciatis!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-item">
                    <div className="single-box">
                      <div className="img-title">
                        <div className="img-area">
                          <img src={profile2} alt="profile5" />
                        </div>

                        <h2 className="name">Julioet Ibrahim</h2>
                      </div>
                      <div className="img-text">
                        <p id="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Distinctio harum mollitia sit libero soluta.
                          Totam ad veritatis odit molestias laudantium aperiam
                          quod esse perferendis! Facilis veniam harum sit
                          laudantium perspiciatis!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-item">
                    <div className="single-box">
                      <div className="img-title">
                        <div className="img-area">
                          <img src={profile3} alt="profile3" />
                        </div>

                        <h2 className="name">Hassan Ahmed</h2>
                      </div>
                      <div className="img-text">
                        <p id="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Distinctio harum mollitia sit libero soluta.
                          Totam ad veritatis odit molestias laudantium aperiam
                          quod esse perferendis! Facilis veniam harum sit
                          laudantium perspiciatis!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="carousel-control-prev"
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              id="carousel-control-next"
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Testimonials;
