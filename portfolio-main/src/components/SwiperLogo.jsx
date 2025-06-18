import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { logos } from "../data/logos";

const LogoSlider=()=> {
  return (
    <div className="bg-white py-10 w-full cursor-pointer">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        grabCursor={false}
        breakpoints={{
          450: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1000: {
            slidesPerView: 7,
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index}>
            <img
            loading="eager"decoding="sync"
              src={`/images/logos/${logo}`}
              alt={`logo-${index}`}
              className="h-16 w-auto mx-auto grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default (LogoSlider);