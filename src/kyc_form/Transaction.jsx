import React, { useEffect } from 'react';
import './Transaction.css'

const Transaction = () => {
  // Load Razorpay script dynamically when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      console.log('Razorpay script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
    };
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      // Step 1: Make a request to the backend to create an order
      const response = await fetch('http://localhost:8000/api/payment/create-order', {
        method: 'POST', // Use POST method to send data
        headers: {
          'Content-Type': 'application/json', // Content type must be JSON for the server to parse it
        },
        body: JSON.stringify({
          amount: 500, // Amount in INR (500 INR)
        }),
      });

      const data = await response.json();

      const order = data;
      console.log('Order created:', order);

      // Step 2: Configure Razorpay options and open the Razorpay checkout modal
      if (window.Razorpay) {
        const options = {
          key: 'rzp_test_3H2snQPHrAwAvR', // Replace with your Razorpay key ID
          amount: order.amount, // Amount in paise
          currency: order.currency,
          name: "EN-PAY",
          description: "Payment for order",
          order_id: order.id, // Pass the Razorpay order ID
          handler: function (response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // You can send this payment ID to your backend for further verification
          },
          prefill: {
            name: "Tanay Sahajwalla",
            email: "sahajwallatanay1@gmail.com",
            contact: "8976246415"
          },
          theme: {
            color: "#F37254" // Theme color
          }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error('Razorpay is not loaded');
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="App">
      <h1>EN-PAY</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Transaction;
