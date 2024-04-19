import React from "react";
import { Carousel } from "react-bootstrap";
import "../Testimonial/Testimonial.css";
import Testimonials from "./Testimonials";
import TestimonialTest from "./TestimonialTest";

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial">
      <h2> What our clients say</h2>
      {/* <div className="testimonial-box"> */}
        {/* <Carousel> */}
          <Testimonials />
          {/* <TestimonialTest /> */}
        {/* </Carousel> */}
      </div>
    // </div>
  );
};

export default Testimonial;
