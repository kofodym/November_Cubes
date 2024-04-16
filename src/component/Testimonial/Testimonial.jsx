import style from "../Testimonial/Testimonial.module.css";
import TestimonialData from "./TestimonialData";


const Testimonial = () => {
  return (
    <div className={style["testimonial"]}>
      <h2> What our clients say</h2>
      <div className={style["testimonial-box"]}>
  
        <TestimonialData />
      </div>
    </div>
  );
};

export default Testimonial;
