import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/404.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Jan Doe",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis minus iure corporis cum! Perferendis.",
  },
  {
    avatar: AVTR1,
    name: "Jan Doe",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis minus iure corporis cum! Perferendis.",
  },
  {
    avatar: AVTR1,
    name: "Jan Doe",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis minus iure corporis cum! Perferendis.",
  },
  {
    avatar: AVTR1,
    name: "Jan Doe",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis minus iure corporis cum! Perferendis.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Revire from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
