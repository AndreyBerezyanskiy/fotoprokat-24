import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './Slider.module.scss';
import 'swiper/css';
import { goods } from "../api/goods";
import { Card } from "../Card";

export const Slider = () => {
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}><span className={styles.title_first}>Популярные</span> товары</h2>

      <div className={styles.button_left} onClick={handlePrevious}>
        <img
          src="./left.svg"
          alt="prev slide"
          className={styles.button_image}
        />
      </div>
     
      <Swiper
         modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
         autoplay={{
           delay: 5000,
           disableOnInteraction: false,
         }}
         spaceBetween={22}
         slidesPerView={3}
         pagination={{
           clickable: true,
           el: '.swiper-custom-pagination',
         }}
         onSwiper={setSwiperRef}
         loop
         observeParents
         observer
      >
      {goods.map(good => (
        <SwiperSlide key={good.id}>
          <Card good={good} />
        </SwiperSlide>
      ))}
      </Swiper>
      
      <div className={`${styles.button}${styles.button_right}`} onClick={handleNext}>
        <img
          src="right.svg"
          alt="next slide"
          className={`${styles.button}${styles.button_right}`}
        />
      </div>
    </div>
  ) 
}