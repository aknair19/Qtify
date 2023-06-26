import { useState, useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import RightArrow from "../../assets/RightArrow.png";
const CarouselRight = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div>{!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}</div>
  );
};

export default CarouselRight;
