import React from "react";
import styles from "../styles/Navbar.module.css";
const HeroSection = () => {
  return (
    <>
      <div className={styles.herosection}>
        <h1 className={styles.heroHedingText}>Discover our products</h1>
        <p className={styles.heroparagraphText}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
