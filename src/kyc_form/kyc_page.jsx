import React, { useRef } from "react";
import "../kyc_form/user_form.css";

const UserForm = () => {
  const canvasRef = useRef(null);
  const handleSign = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    let isDrawing = false;

    const startDrawing = (e) => {
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    const draw = (e) => {
      if (isDrawing) {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
      }
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  };

  return (
    <div className="page-container">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/backgroundVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="form-container">
          <h2>Complete Your KYC</h2>
          <form>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
          
            <label>Phone:</label>
            <input type="tel" placeholder="Enter your phone number" />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Account Type:</label>
            <select>
              <option value="current">Current</option>
              <option value="savings">Savings</option>
            </select>

            <label>Proof of Identity:</label>
            <select>
              <option value="aadhar">Aadhar</option>
              <option value="pancard">Pancard</option>
            </select>
            <input type="file" accept=".jpg,.jpeg,.png,.pdf" />
          
            <label>Upload Video:</label>
            <select>
              <option value="aadhar_video">Aadhar Video</option>
              <option value="pancard_video">Pancard Video</option>
            </select>
            <input type="file" accept="video/*" />

            <label>Bank Details:</label>
            <input type="text" placeholder="Enter your bank name" />
            <input type="text" placeholder="Enter your bank account number" />
            <input type="text" placeholder="Enter IFSC code" />

            <label>eSign:</label>
            <canvas
              ref={canvasRef}
              width="400"
              height="200"
              style={{ border: "1px solid black" }}
              onMouseDown={handleSign}
            ></canvas>
            <button type="button" onClick={() => alert("Signature saved")}>
              Save Signature
            </button>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="gif-container">
          <img src="https://cdn.dribbble.com/users/2272987/screenshots/6299780/dribbble_2.gif" alt="GIF Inspiration" className="gif-display" />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
