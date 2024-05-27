import React from 'react';
import style from './Hero.module.css';
import headphonesImage from './image.png';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroContent}>
        <div className={style.heroText}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img src={headphonesImage} alt="Headphones" className={style.heroImage} />
      </div>
    </div>
  );
};

export default Hero;
