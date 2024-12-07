import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.Container1}>
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.description}>
        Welcome to <strong>En-Pay</strong> – the most reliable and secure
        payment gateway solution for businesses of all sizes. We provide seamless
        payment processing for online transactions, allowing you to accept payments
        quickly and efficiently through various payment methods like credit cards,
        debit cards, UPI, wallets, and more.
      </p>
      <section className={styles.features}>
        <h3>Our Features</h3>
        <ul className={styles.featuresList}>
          <li>
            <strong>Fast Payment Processing:</strong> Instant payment confirmation,
            reducing checkout delays and improving the customer experience.
          </li>
          <li>
            <strong>Multiple Payment Methods:</strong> We support a wide range of
            payment methods, including credit cards, debit cards, UPI, wallets, and
            more.
          </li>
          <li>
            <strong>Secure Transactions:</strong> We use industry-standard encryption
            and security protocols to ensure that your payment data is always safe.
          </li>
          <li>
            <strong>Easy Integration:</strong> Our API is simple to integrate into your
            website or mobile app, ensuring a smooth onboarding experience.
          </li>
          <li>
            <strong>Customer Support:</strong> We offer dedicated 24/7 support to help
            resolve any payment-related issues you might encounter.
          </li>
        </ul>
      </section>
      <section className={styles.mission}>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower businesses by providing them with a reliable,
          secure, and easy-to-use payment solution. Whether you’re a small business or
          a large enterprise, we aim to help you streamline your payment processes and
          expand your customer base with minimal effort.
        </p>
      </section>
      
    </div>
    </div>
  );
};

export default AboutUs;