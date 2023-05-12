import React from "react";
import styles from './HeaderMobile.module.scss'

export const HeaderMobile = () => {
  return ( 
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="#favorites">
              <img src="/star.svg" alt="favorites"/>
            </a>
          </li>
          
          <li className={styles.item}>
            <a className={styles.link} href="#compare">
              <img src="compare.svg" alt="compare"/>
            </a>
          </li>
         
          <li className={styles.item}>
            <a className={styles.link}href="#shopping-cart">
              <img src="shopping-cart.svg" alt="shopping cart"/>
            </a>
          </li>
        </ul>

        <a href="#home" className={styles.logo}>
          <img 
            className={styles.logo_image}
            src="logo-mobile.png"
            alt="logo"
          />
        </a>

        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#search">
              <img src="search.svg" alt="search"/>
            </a>
          </li>
          
          <li className={styles.item}>
            <a href="#locked">
              <img src="locked.svg" alt="locked"/>
            </a>
          </li>
         
          <li className={styles.item}>
            <a href="#menu">
              <img src="menu.svg" alt="menu"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}