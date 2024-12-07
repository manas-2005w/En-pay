import React, { useEffect, useRef, useState } from "react";
import styles from "./NewPage.module.css";

const NewPage = () => {
  const canvasRef = useRef(null);
  let isDrawing = false;
  const [kycInfo, setKycInfo] = useState({
    AccountType: "",
    ProofOfIdentity: "",
    UploadDocs: "",
    eSign: null,
    InPersonVerification: "",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
  
    let isDrawing = false;
  
    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
  
    const startDrawing = (e) => {
      isDrawing = true;
      const { x, y } = getMousePos(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };
  
    const draw = (e) => {
      if (!isDrawing) return;
      const { x, y } = getMousePos(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    };
  
    const stopDrawing = () => {
      isDrawing = false;
      ctx.closePath();
    };
  
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  
    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);  

  const saveSignature = () => {
    const canvas = canvasRef.current;
    const signatureData = canvas.toDataURL("image/png");
    setKycInfo((prev) => ({ ...prev, eSign: signatureData }));
    alert("Signature saved successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKycInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kycInfo.eSign) {
      alert("Please provide your eSign before submitting!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/Kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(kycInfo),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        const data = await response.json();
        console.log("Server Response:", data);
      } else {
        alert("Failed to submit form");
        console.error("Submission Error:", response.statusText);
      }
    } catch (error) {
      alert("An error occurred during submission");
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Background Video */}
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Content */}
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Complete Your KYC</h2>
          <form onSubmit={handleSubmit}>
            <label>Account Type:</label>
            <select
              name="AccountType"
              value={kycInfo.AccountType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>

            <label>Proof of Identity:</label>
            <select
              name="ProofOfIdentity"
              value={kycInfo.ProofOfIdentity}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Proof</option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN Card">PAN Card</option>
            </select>

            <label>Upload Documents:</label>
            <select
              name="UploadDocs"
              value={kycInfo.UploadDocs}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Document Type</option>
              <option value="Photo">Photo</option>
              <option value="AddressProof">Address Proof</option>
              <option value="TaxReturn">Tax Return</option>
              <option value="BankStatement">Bank Statement</option>
            </select>

            <label>In-Person Verification:</label>
            <select
              name="InPersonVerification"
              value={kycInfo.InPersonVerification}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>

            <label>eSign:</label>
            <canvas
              ref={canvasRef}
              width="400"
              height="200"
              className={styles.canvas}
            ></canvas>
             <button type="button" onClick={saveSignature}>
              Save Signature
            </button>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* GIF Container */}
        <div className={styles.gifContainer}>
          <img
            src="https://static.wixstatic.com/media/00a0e0_0475e932d56a4db2a2524dfa76fc3fd6~mv2.gif"
            alt="Loading animation"
            className={styles.gifDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPage;