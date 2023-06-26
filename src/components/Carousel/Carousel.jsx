import React, { useEffect } from "react";
import { Swiper, useSwiper } from "swiper/react";
import {  Navigation } from "swiper";
import CarouselRight from "./CarouselRight";
import CarouselLeft from "./CarouselLeft";
import 'swiper/swiper.css'

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
};

const Carousel = (data,component) => {
  return (
    <div>
      <Swiper>
        initialSlide={0}
        style={{padding:'0px 20px'}}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map(item=>{
            return(
                <SwiperSlide key={item.id}>{item}</SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
