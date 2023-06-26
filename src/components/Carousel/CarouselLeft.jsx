import { useState,useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import  LeftArrow  from "../../assets/LeftArrow.png";
const CarouselLeft = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBegining);
useEffect(()=>{
  swiper.on('slideChange',()=>{
    setIsBegining(swiper.isBeginning)
  })
},[])
  return (
    <div>{!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}</div>
  );
};

export default CarouselLeft;
