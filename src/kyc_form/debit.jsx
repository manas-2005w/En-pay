import React, { useState } from "react";
import "../kyc_form/user_form.css";


const UserForm = () => {

  let [debitInfo, setDebitInfo] = useState({
    CardNumber: "",
    HolderName: "",
    CVV: "",
    ExpiryDate: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDebitInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/debit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(debitInfo),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Debit card payment successful!");
        console.log("Server Response:", data);
      } else {
        const errorData = await response.json();
        alert(`Failed to pay via debit card: ${errorData.message || "Unknown error"}`);
        console.error("Registration Error:", errorData);
      }
    } catch (error) {
      alert("An error occurred during payment.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="page-container">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/backgroundVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="form-container">
          <h2>Payment with Debit Card </h2>
          <form onSubmit={handleSubmit}>
            <label>Card Number</label>
            <input name="CardNumber" type="text" placeholder="Enter your card number" onChange={handleInputChange} />

            <label>Holder Name</label>
            <input name="HolderName" type="text" placeholder="Enter your holder name" onChange={handleInputChange} />

            <label>CVV</label>
            <input name="CVV" type="password" placeholder="Enter your cvv" onChange={handleInputChange} />

            <label>Expiry</label>
            <input name="ExpiryDate" type="number" placeholder="MM/YY" onChange={handleInputChange} />

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="gif-container">
          <img src="https://i.pinimg.com/originals/6c/59/8b/6c598b8cb38df244eda78f8eb2f6c425.gif" alt="GIF Inspiration" className="gif-display" />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
