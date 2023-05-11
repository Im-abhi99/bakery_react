import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide  ><img className="car"  src={require("../images/img.png")} style={{height:'500px', backgroundSize:'100% 100%',objectFit:'cover',width:'100%'}} alt="" /></SwiperSlide>
        <SwiperSlide  ><img  className="car" style={{height:'500px', backgroundSize:'100% 100%',objectFit:'cover',width:'100%'}} src="https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80"  alt="" /></SwiperSlide>
        <SwiperSlide  ><img  className="car" style={{height:'500px', backgroundSize:'100% 100%',objectFit:'cover',width:'100%'}} src="https://img.freepik.com/free-photo/fresh-danish-bread-with-milk-fruit-blueberry-cherry-sauce-served-with-milk_1150-23544.jpg?w=740&t=st=1683044460~exp=1683045060~hmac=77a56dbaf2e271e7ce653f9a9834bf67d8546b29d31499090ce0d153eff626a2"  alt="" /></SwiperSlide>
        <SwiperSlide  ><img  className="car" style={{height:'500px', backgroundSize:'100% 100%',objectFit:'cover',width:'100%'}} src="https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake-stand-with-copy-space_23-2148834056.jpg?w=900&t=st=1683044959~exp=1683045559~hmac=ea42f8404d598912be89f8d26e0765dc7db3f461bac67407273b5332ac09a945"  alt="" /></SwiperSlide>
   
      </Swiper>
    </>
  );
}
