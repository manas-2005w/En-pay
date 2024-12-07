import React from "react";
import styles from "./HomePage.module.css";
import debitCardImage from './assets/kk.gif'; // Import the image directly
import logoImage from './assets/logo.png'; // Import your logo image
import { Link } from "react-router-dom"; // Import Link from React Router

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Logo */}
        <img src={logoImage} alt="Logo" className={styles.logo} />
        
        {/* Navbar Links */}
        <Link to="/step">Service</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <button className={styles.button}>Dashboard</button>
      <button className={styles.button1}>+ </button>

      <img src={debitCardImage} alt="Debit Card" className={styles.imageRight} />

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          We Provide
          <br />
          <span>Best Business Services</span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;