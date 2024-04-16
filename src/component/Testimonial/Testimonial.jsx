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
      </div>
    </div>
  );
};

export default Testimonial;
