import React from 'react';
import MainPage from '@/assets/images/Group 17.png';
import Slider from '@/components/Slider';
import styles from './Main.scss';
import Features from '@/components/Features';
import Audience from '@/components/Audience';
import Recipes from '@/components/Recipes';

const Main = (): JSX.Element => {
 return (
   <div className="bg-light">
      <div>
        <img src={MainPage} className={styles['main_img']} alt="mainImg"/>
      </div>
      <Features/>
      <Slider />
      <Audience />
      <Recipes />
  </div>
  )
}

export default Main;
