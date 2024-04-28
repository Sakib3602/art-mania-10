import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

// import Swiper styles
import 'swiper/css';

// import required modules
import {  Autoplay,Grid, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    const [text] = useTypewriter({
        words: ['Art','Craft','Transform','Sculpt','Imagine'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <>
        <h1 className='text-[30px] lg:text-[40px] md:text-[40px] font-[700]'>Choose Your Dream {text} <Cursor cursorColor='red' /></h1>
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
        <SwiperSlide className='   mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className=' mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className=' mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className=' mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
        <SwiperSlide className='  mt-5' >
            <img src="https://images.unsplash.com/photo-1612111819547-ac62f91b1a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl w-full h-full' alt="" />
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;