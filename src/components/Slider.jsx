import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Card from "./card";
const Slider = ({ data, type }) => {
  return (
    <div className="px-2  w-full justify-center  flex flex-wrap gap-8">
      <Swiper modules={[Navigation, Pagination]} slidesPerView={4} navigation>
        {data.map((card) => {
          return (
            <SwiperSlide key={card?.id} className="flex justify-center">
              <Card card={card} type={type} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
