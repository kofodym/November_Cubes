import React from "react";
import { Carousel, CarouselCaption } from "react-bootstrap";
import style from "../Testimonial/Testimonial.module.css";


import profile1 from "../../app/assests/images/peters1.png";
import profile2 from "../../app/assests/images/uche2.png";
import profile3 from "../../app/assests/images/idon3.png";

const TestimonialData = () => {
  const list = [
    {
      id: 1,
      name: "Miracle Peters",
      profile: `${profile1}`,
      message:
        "Wow! November Cubes & Mama Ashabi was a delightful surprise. I had the jerk chicken from November Cubes and pounded yam with egusi stew from Mama Ashabi - both were incredible! A must-try for anyone looking for something different.",
    },
    {
      id: 2,
      name: "Kay",
      profile: `${profile2}`,
      message:
        "An epicurean delight! November Cubes intercontinental offerings are a feast for the senses, showcasing the finest flavors from around the world.",
    },
    {
      id: 3,
      name: "Idongesit Usoro ",
      profile: `${profile3}`,
      message:
        "Mama Ashabi s corner is a taste of home! Their authentic Nigerian dishes evoke memories of family gatherings and traditional feasts.",
    },
  ];

  const TestimonialList = list.map((item) => {
    return (
      <div key={item.id} className={style["testimonial-list"]}>
        <Carousel.Item key={item.id}>
        {/* <div className={style["testimonial-item"]}>
          <div className={style["avatar-header"]}> */}
            {/* <div className={style.profile}> */}
              <img src={item.profile} alt={`${item.name} profile`} />
            {/* </div> */}
            <CarouselCaption>
            <h3 className={style.name}>{item.name}</h3>
          {/* </div> */}

          <p className={style.message}>{item.message}</p>
        </CarouselCaption>
        {/* </div> */}
        </Carousel.Item>
      </div>
    );
  });
  return <div>{TestimonialList}</div>;
};

export default TestimonialData;
