import React from "react";
import styles from './HeaderDesktop.module.scss';

export const HeaderDesktop = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        <img 
          className={styles.logo_image}
          src="logo-desktop.png"
          alt="logo"
        />
      </a>
     
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#catalog">каталог</a>
        </li>
        
        <li className={styles.item}>
          <a className={styles.link} href="#about">о компании</a>
        </li>
       
        <li className={styles.item}>
          <a className={styles.link} href="#rules">правила</a>
        </li>
        
        <li className={styles.item}>
          <a className={styles.link} href="#news">новости</a>
        </li>
       
        <li className={styles.item}>
          <a className={styles.link} href="#contacts">контакты</a>
        </li>
      </ul>

      <div className={styles.icons}>
        <li className={styles.icons_item}>
          <a className={styles.icons_link} href="#favorites">
            <img className={styles.icons_image} src="./star.svg" alt="favorites"/>
          </a>
        </li>
       
        <li className={styles.icons_item}>
          <a className={styles.icons_link} href="#compare">
            <img className={styles.icons_image} src="compare.svg" alt="compare"/>
          </a>
        </li>
        
        <li className={styles.icons_item}>
          <a className={styles.icons_linkCart} href="#shopping-cart">
            <img className={styles.icons_image} src="shopping-cart.svg" alt="shopping cart"/>
          </a>
        </li>
        
        <li className={styles.icons_item}>
          <a href="#search">
            <img className={styles.icons_image} src="search.svg" alt="search"/>
          </a>
        </li>
        
        <li className={styles.icons_item}>
          <a href="#user">
            <img className={styles.icons_image} src="user.svg" alt="user"/>
          </a>
        </li>
      </div>
    </nav>
  </header>
)