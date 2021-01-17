import React from 'react';
import rssLogo from '@/assets/images/rsschooljs.png';
import styles from './Footer.scss';

const Footer = (): JSX.Element => (
  <footer className="bg-light my-3">
    <div className={styles['footer__wrapper']}>
      <a className={styles['footer__school']} href="https://rs.school/js/">
        <img src={rssLogo} alt="rsschool"/>
        <span>2020</span>
      </a>
      <div className="footer__dev">
        <a className={styles['footer__link']} href="https://github.com/KingstonTwelve">KingstonTwelve</a>
        <a className={styles['footer__link']} href="https://github.com/nstgorbenko">nstgorbenko</a>
        <a className={styles['footer__link']} href="https://github.com/Torondil">Torondil</a>
      </div>
    </div>
  </footer>
);

export default Footer;
