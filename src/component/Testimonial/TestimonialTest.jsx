import React from "react";
import { Carousel } from "react-bootstrap";
import  "../Testimonial/Testimonial.css";
import profile1 from "../../app/assests/images/peters1.png";
import profile2 from "../../app/assests/images/uche2.png";
import profile3 from "../../app/assests/images/idon3.png";

const TestimonialTest = () => {
  const testimonials = [
    {
      id: 1,
      name: "Miracle Peters",
      profile: profile1,
      message:
        "Wow! November Cubes & Mama Ashabi was a delightful surprise. I had the jerk chicken from November Cubes and pounded yam with egusi stew from Mama Ashabi - both were incredible! A must-try for anyone looking for something different.",
    },
    {
      id: 2,
      name: "Kay",
      profile: profile2,
      message:
        "An epicurean delight! November Cubes intercontinental offerings are a feast for the senses, showcasing the finest flavors from around the world.",
    },
    {
      id: 3,
      name: "Idongesit Usoro",
      profile: profile3,
      message:
        "Mama Ashabi's corner is a taste of home! Their authentic Nigerian dishes evoke memories of family gatherings and traditional feasts.",
    },
    {
      id: 4,
      name: "Williams",
      profile: profile1,
      message:
        "Wow! November Cubes & Mama Ashabi was a delightful surprise. I had the jerk chicken from November Cubes and pounded yam with egusi stew from Mama Ashabi - both were incredible! A must-try for anyone looking for something different.",
    },
    {
      id: 5,
      name: "Jacob Stevenson",
      profile: profile2,
      message:
        "An epicurean delight! November Cubes intercontinental offerings are a feast for the senses, showcasing the finest flavors from around the world.",
    },
    {
      id: 6,
      name: "Olutayo Folake",
      profile: profile3,
      message:
        "Mama Ashabi's corner is a taste of home! Their authentic Nigerian dishes evoke memories of family gatherings and traditional feasts.",
    },
  ];

  const testimonialsPerSlide = 3;

  // Split testimonials array into chunks of size 'testimonialsPerSlide'
  const testimonialChunks = testimonials.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / testimonialsPerSlide);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="container" >
      <div className="row">
        <div className="col-lg-12">
          <Carousel>
            {testimonialChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="row row-items">
                  {chunk.map((testimonial) => (
                    <div
                      className="col-lg-4 col-item"
                      key={testimonial.id}
                    >
                      <div className="single-box">
                        <div className="img-title">
                          <div className="img-area">
                            <img
                              src={testimonial.profile}
                              alt={testimonial.name}
                            />
                          </div>
                          <h2 className="name">{testimonial.name}</h2>
                        </div>

                        <div className="img-text">
                          <p>{testimonial.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTest;
