import style from "../Testimonial/Testimonial.module.css";

const TestimonialData = () => {
  const list = [
    {
      id: 1,
      name: "Miracle Peters",
      profile: "p1",
      message:
        "Wow! November Cubes & Mama Ashabi was a delightful surprise. I had the jerk chicken from November Cubes and pounded yam with egusi stew from Mama Ashabi - both were incredible! A must-try for anyone looking for something different.",
    },
    {
      id: 2,
      name: "Kay",
      profile: "p2",
      message:
        "An epicurean delight! November Cubes intercontinental offerings are a feast for the senses, showcasing the finest flavors from around the world.",
    },
    {
      id: 3,
      name: "Idongesit Usoro ",
      profile: "p3",
      message:
        "Mama Ashabi s corner is a taste of home! Their authentic Nigerian dishes evoke memories of family gatherings and traditional feasts.",
    },
  ];

  const TestimonialList = list.map((item) => {
    return (
      <div className={style["testimonialList"]}>
        <div key={item.id}>
          <div className={style.profile}>{item.profile}</div>
          <p className={style.name}>{item.name}</p>
          <p className={style.message}>{item.message}</p>
        </div>
      </div>
    );
  });
  return <div>{TestimonialList}</div>;
};

export default TestimonialData;
