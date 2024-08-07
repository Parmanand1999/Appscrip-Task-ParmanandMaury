import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarBrand}>
        <img src="/images/logo.png" alt="Logo" />
        <h1>LOGO</h1>
        <div className={styles.navbarIcons}>
          <img
            className={`${styles.icon} fas fa-search`}
            src="/images/search-normal.png"
            alt="Search"
          />
          <img
            className={`${styles.icon} fas fa-heart`}
            src="/images/heart.png"
            alt="Heart"
          />
          <img
            className={`${styles.icon} fas fa-shopping-cart`}
            src="/images/shopping-bag.png"
            alt="Shopping Cart"
          />
          <img
            className={`${styles.iconuser}`}
            src="/images/profile.png"
            alt="Profile"
          />
          <div className={styles.languageDropdown}>
            <button className={styles.languageDropdownButton}>ENG</button>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navbarMenu}>
          <ul className={styles.navbarLinks}>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
