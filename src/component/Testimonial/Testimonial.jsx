<<<<<<< HEAD
import React from "react";
import "../Testimonial/Testimonial.css";
import Testimonials from "./Testimonials";

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial">
      <h2> What our clients say</h2>
      {/* <div className="testimonial-box"> */}
          <Testimonials />
=======
import style from "../Testimonial/Testimonial.module.css";
import TestimonialData from "./TestimonialData";
// import Avatar from "./Avatar";

const Testimonial = () => {
  return (
    <div className={style["testimonial"]}>
      <div className={style["testimonial-box"]}>
        {/* <Avatar /> */}
        <h2>What Our Clients Says</h2>
        <TestimonialData />
>>>>>>> main
      </div>
    // </div>
  );
};

export default Testimonial;
