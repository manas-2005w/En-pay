import React from 'react';
import styles from './ReviewComponent.module.css';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    review: 'En-pay made integrating payments so simple for our app. The API is clean and well-documented, and the transactions are processed quickly.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    review: 'Good service overall, but the pricing could be more transparent. I had to look around for details on transaction fees.',
  },
  {
    id: 3,
    name: 'Samuel Lee',
    rating: 3,
    review: 'It works fine, but we’ve faced some delays with withdrawals. Could be improved in terms of speed and reliability.',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    rating: 5,
    review: 'En-pay customer support is fantastic! They resolved a payment issue for us within hours, and the platform itself is very easy to use.',
  },
];

const ReviewComponent = () => {
  return (

    <div className={styles.reviewsContainer}>
      <h2 className={styles.title}>Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className={styles.reviewCard}>
          <h3 className={styles.reviewerName}>{review.name}</h3>
          <div className={styles.rating}>
            {Array.from({ length: review.rating }, (_, index) => (
              <span key={index} className={styles.star}>★</span>
            ))}
          </div>
          <p className={styles.reviewText}>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;