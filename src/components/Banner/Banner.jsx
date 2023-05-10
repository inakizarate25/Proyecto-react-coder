import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

 const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/nkGW5DR/D53-UOXKNVNB2-JA3-JHSKEGDQCUE.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/kJtXcZW/apple-watch-nike-edition-10.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qYbQhhr/1ac2b2e0-8927-11ec-bb4b-b8d31062c379.webp"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cXqYK1f/614201776-209580828-1706x960.jpg"/></SwiperSlide>
      </Swiper>

      <div className="bienvenidos">
        <h2>BIENVENIDO A PHONELAND</h2>
        <p>TU TIENDA DE ELECTRONICA FAVORITA</p>
      </div>
    </>
  );
}
export default Banner