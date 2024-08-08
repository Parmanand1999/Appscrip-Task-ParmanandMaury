import React from 'react';
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-newsletter"]}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettä muse.</p>
          <div className={styles["newsletter-input"]}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles["footer-contact"]}>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5380</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <p>USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr />
      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-section"]}>
          <h3>mettä muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        
        <div className={styles["footer-section"]}>
          <h3>mettä muse ACCEPTS</h3>
          <div className={styles["payment-icons"]}>
            <img src="/footerimg/googlpay.png" alt="Google Pay" />
            <img src="/footerimg/creditimg.png" alt="Visa" />
            <img src="/footerimg/paypal.png" alt="MasterCard" />
            <img src="/footerimg/amex.png" alt="Amex" />
            <img src="/footerimg/applepay.png" alt="Apple Pay" />
            <img src="/footerimg/opay.png" alt="Dipay" />
          </div>
        </div>
      </div>
      <p className={styles["footer-copyright"]}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
