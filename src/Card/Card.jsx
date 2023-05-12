import React from "react";
import styles from './Card.module.scss';

export const Card = ({ good }) => {
const {
  imageLink,
  model,
  name,
  priceWorkDay,
  priceRestDay,
  priceWeek,
  priceMonth,
} = good;

  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <img 
          className={styles.image}
          src={imageLink} 
          alt={model}
        />
        <p className={styles.model}>{model}</p>
        <p className={styles.name}>{name}</p>
      </div>

      <div className={styles.additional}>
        <a href="#compare">
          <img 
            className={styles.additional_image}
            src="compare.svg" 
            alt="compare goods" 
          />
        </a>
        
        <a href="#favorites">
          <img 
            className={styles.additional_image}
            src="star.svg" 
            alt="favorites" 
          />
        </a>
      </div>
      
      <div className={styles.prices}>
        <div className={styles.price}>
          <p className={styles.amount}>{priceWorkDay}</p>
          <p className={styles.day}>Будний</p>
        </div>
        
        <div className={styles.price}>
          <p className={styles.amount}>{priceRestDay}</p>
          <p className={styles.day}>Выходной</p>
        </div>
        
        <div className={styles.price}>
          <p className={styles.amount}>{priceWeek}</p>
          <p className={styles.day}>Неделя</p>
        </div>
        
        <div className={styles.price}>
          <p className={styles.amount}>{priceMonth}</p>
          <p className={styles.day}>Месяц</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <a className={styles.button} href="#about">Подробнее</a>
        <a className={`${styles.button} ${styles.button_cart}`} href="#cart">
          <img src="cart.svg" alt="cart"/>
          <span >В корзину</span></a>
      </div>
    </div>
  )
}