import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function Carousel2() {
  return (
    <>
    <div className="Carousel2">
        <h2>Watch Our Videos  </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination ,]}
        className="mySwiper"
      >
        
        <SwiperSlide><iframe className="frame" src="https://www.youtube.com/embed/p9_zW22ixjE" title="CROISSANT RECIPE l CHRISTMAS RECIPE l EGGLESS &amp; WITHOUT OVEN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe   className="frame" src="https://www.youtube.com/embed/Ldgm3YD-tMQ" title="Chocolate croissant recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe  className="frame" width="853" height="480" src="https://www.youtube.com/embed/bOQfTGfNLjM" title="How to Make Croissants | Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe  className="frame" width="853" height="480" src="https://www.youtube.com/embed/FsgWXCnT8yE" title="Make bakery-quality croissants at home using plain flour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe  className="frame"  width="853" height="480" src="https://www.youtube.com/embed/pmTo3fHK9uE" title="Fluffy Japanese Cheesecake" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe  className="frame" width="853" height="480" src="https://www.youtube.com/embed/adXmM-eqwz8" title="Japanese Street Food - JIGGLY CHEESECAKE Uncle Rikuro&#39;s Cheese Cake Osaka Japan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe  className="frame" width="853" height="480" src="https://www.youtube.com/embed/840D3AcTmcM" title="Taiwanese Castella Cake Recipe | Emojoie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
      </Swiper>
     <div> <button>More</button></div>
      </div>
    </>
  );
}
