import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import styles from './Slider.scss';
import { Service } from '@/types/Service';
SwiperCore.use([Navigation, Keyboard, Autoplay]);

export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  sourceUrl: string;
}

export interface RootObject {
  recipes: Recipe[];
}

const BASE_RANDOMPATH = 'https://api.spoonacular.com/recipes/random';
const NUMBER = '20';
const API_KEY = '3c7502ce108f4a94b059adc1b3a86117';
// const API_KEY = '6f98d3f931d94627ba3e8bbe05155764';

export const Slider = (): JSX.Element => {
  const [data, setData] = useState<Service<RootObject>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(`${BASE_RANDOMPATH}?number=${NUMBER}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setData({ status: 'loaded', data: response });
      })
      .catch(error => setData(error));
  }, []);
  console.log(data);
  return (
    <div className="py-5 bg-light theme-container">
      <Swiper
        slidesPerView={1}
        navigation
        spaceBetween={20}
        slidesPerGroup={1}
        loop
        speed={500}
        loopFillGroupWithBlank
        autoplay={{
          delay: 5000,
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
      {data.status === "loaded" &&
       data.data.recipes.map(item => (
        <SwiperSlide key={item.id}>
          <div>
            <img
              className="d-block w-100"
              src={item.image}
              alt="Recipe img"
            />
            <a href={item.sourceUrl} target="blank" className={styles['recipe__title']} dangerouslySetInnerHTML={{ __html: item.title }}></a>
            <span dangerouslySetInnerHTML={{ __html: item.summary }} className={styles['recipe__summary']}/>
          </div>
        </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
}
export default Slider;
