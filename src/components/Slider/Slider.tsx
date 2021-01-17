import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Keyboard, Autoplay]);

import { IFilter } from '@/types/Filter';
import { Service } from '@/types/Service';

const BASE_RANDOMPATH = 'https://api.spoonacular.com/recipes/random';
const NUMBER = '100';
const API_KEY = '3c7502ce108f4a94b059adc1b3a86117';

const Slider = (): JSX.Element => {
  return (
    <div className="my-5 bg-light">
      <Swiper
        slidesPerView={1}
        navigation
        spaceBetween={20}
        slidesPerGroup={1}
        loop
        speed={500}
        loopFillGroupWithBlank
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,

          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 1,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <img
              className="d-block w-100"
              src="https://www.simplyrecipes.com/wp-content/uploads/2020/01/Lasagna-For-Two-LEAD-6-600x400.jpg"
              alt="Lasagna"
            />
            <h3>Recipe фыва</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="d-block w-100"
              src="https://www.simplyrecipes.com/wp-content/uploads/2020/01/Lasagna-For-Two-LEAD-6-600x400.jpg"
              alt="Lasagna"
            />
            <h3>Recipe asdas</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="d-block w-100"
              src="https://www.simplyrecipes.com/wp-content/uploads/2020/01/Lasagna-For-Two-LEAD-6-600x400.jpg"
              alt="Lasagna"
            />
            <h3>Recipe Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="d-block w-100"
              src="https://www.simplyrecipes.com/wp-content/uploads/2020/01/Lasagna-For-Two-LEAD-6-600x400.jpg"
              alt="Lasagna"
            />
            <h3>Recipe Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
