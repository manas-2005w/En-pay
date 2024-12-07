import React, { useState } from "react";
import "../kyc_form/user_form.css";

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNo: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User registration successful!");
        console.log("Server Response:", data);
      } else {
        const errorData = await response.json();
        alert(`Failed to register user: ${errorData.message || "Unknown error"}`);
        console.error("Registration Error:", errorData);
      }
    } catch (error) {
      alert("An error occurred during registration.");
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
          <h2>User Registration</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userInfo.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phoneNo">Phone Number:</label>
            <input
              type="number"
              name="phoneNo"
              placeholder="Enter your phone number"
              value={userInfo.phoneNo}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Register</button>
          </form>
        </div>
        <div className="gif-container">
          <img
            src="https://cdn.dribbble.com/users/2272987/screenshots/6299780/dribbble_2.gif"
            alt="GIF Inspiration"
            className="gif-display"
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
