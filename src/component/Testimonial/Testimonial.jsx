import React from "react";
import "../Testimonial/Testimonial.css";
import Testimonials from "./Testimonials";

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial">
      <h2> What our clients say</h2>
      {/* <div className="testimonial-box"> */}
          <Testimonials />
      </div>
    // </div>
  );
};

export default Testimonial;
