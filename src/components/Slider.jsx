import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const [text] = useTypewriter({
    words: ["Art", "Craft", "Transform", "Sculpt", "Imagine"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <>
      <h1 className="text-[30px] lg:text-[40px] md:text-[40px] font-[700]">
        Choose Your Dream {text} <Cursor cursorColor="red" />
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Grid, Pagination, Navigation]}
        className="mySwiper h-[200px] lg:h-[400px]"
      >
        <SwiperSlide className="   mt-5">
          <img
            src="https://i.ibb.co/7vx8Vgq/mike-petrucci-f6-Xv0xs9-JWg-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="  mt-5">
          <img
            src="
https://i.ibb.co/9tTyBVD/amauri-mejia-Ih-Xr-WDck-ZOQ-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className=" mt-5">
          <img
            src="https://i.ibb.co/d0Z8XYY/billow926-c-GEed-HDzlj-M-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className=" mt-5">
          <img
            src="
https://i.ibb.co/vk7NFRS/unseen-studio-s9-CC2-SKy-SJM-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="  mt-5">
          <img
            src="
https://i.ibb.co/tqSbb4G/tim-marshall-c-Atz-HUz7-Z8g-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className=" mt-5">
          <img
            src="https://i.ibb.co/j60LcV9/khara-woods-KR84-Rp-MCb0w-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="  mt-5">
          <img
            src="https://i.ibb.co/nrqWMZK/russn-fckr-kr-V5a-S4j-Dj-A-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="  mt-5">
          <img
            src="https://i.ibb.co/41hGnkd/alice-donovan-rouse-yu68f-UQDv-OI-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="  mt-5">
          <img
            src="https://i.ibb.co/XD490z9/andrian-valeanu-yj-Xlyr-KIz2-A-unsplash.jpg"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
