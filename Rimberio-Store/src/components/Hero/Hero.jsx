import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../App.css';
import { assets } from '../../assets/frontend_assets/assets';

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="flex items-center flex-col sm:flex justify-center object-cover">
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={assets.hero_img} alt="Hero Image 1" /></SwiperSlide>
        <SwiperSlide><img src={assets.hero_img_1} alt="Hero Image 2" /></SwiperSlide>
        <SwiperSlide><img src={assets.hero_img_2} alt="Hero Image 3" /></SwiperSlide>
        <SwiperSlide><img src={assets.hero_img_3} alt="Hero Image 4" /></SwiperSlide>
        <SwiperSlide><img src={assets.hero_img_4} alt="Hero Image 5" /></SwiperSlide>
        <SwiperSlide><img src={assets.hero_img_5} alt="Hero Image 6" /></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
