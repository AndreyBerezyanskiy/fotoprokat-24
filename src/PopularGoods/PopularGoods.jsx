import React from "react";
import styles from './PopularGoods.module.scss';
import { goods } from "../api/goods";
import { Card } from "../Card";



export const PopularGoods = () => {
  return (
    <section className={styles.popular_goods}>
      <h2 className={styles.title}>Популярные товары</h2>
      {goods.map(good => (
          <div key={good.id} className={styles.popular_good}>
            <Card good={good} />
          </div>
        ))}
    </section>
  )
}