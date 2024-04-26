import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import Swiper styles
import 'swiper/css';

// import required modules
import {  Autoplay,Grid, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
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
          modules={[Autoplay,Grid, Pagination, Navigation]}
        
        className="mySwiper h-[200px] lg:h-[400px]"
      >
        <SwiperSlide className=' border-[5px] border-black border-solid md:border-[13px]   md:border-black md:border-solid lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid  lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid   lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid md:border-[13px]   md:border-black md:border-solid  lg:border-[23px]  lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid   lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid   lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid   lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid  lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='border-[5px] border-black border-solid  md:border-[13px]   md:border-black md:border-solid   lg:border-[23px]   lg:border-black lg:border-solid  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;