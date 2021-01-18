import React from 'react';
import MainPage from '@/assets/images/Group17.png';
import Slider from '@/components/Slider';
import styles from './Main.scss';
import Features from '@/components/Features';
import Audience from '@/components/Audience';

const Main = (): JSX.Element => (
  <div className="bg-light">
      <div>
        <img src={MainPage} className={styles['main_img']} alt="mainImg"/>
      </div>
      <Features/>
      <Slider />
      <Audience />
  </div>
  )

export default Main;
