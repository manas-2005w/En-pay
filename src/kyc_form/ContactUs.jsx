import React, { useState } from 'react';
import styles from './Contact.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual form submission logic (e.g., API call)
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Thank you for contacting us!');
    } else {
      setFormStatus('Please fill out all fields.');
    }
  };

  return (
    <div className={styles.Container1}>
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textareaField}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
    </div>
    </div>
  );
};

export default ContactUs;