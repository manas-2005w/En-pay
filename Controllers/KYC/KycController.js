// import Router from "express";
import express from "express";
import KYCModel from "../../models/KYCMODELS/KYCModel.js";

const KYCrouter = express.Router();

KYCrouter.post("/", async (req, res) => {
    try {
        // Destructure the request body to match the model fields
        const { AccountType, ProofOfIdentity, UploadDocs, eSign, InPersonVerification } = req.body;

        // Validate the incoming data (for fields and enums)
        if (!AccountType || !ProofOfIdentity || !UploadDocs || !eSign || !InPersonVerification) {
            return res.status(400).send({ message: "All fields are required" });
        }

        // Create a new KYC entry
        const Kyc = new KYCModel({
            AccountType,
            ProofOfIdentity,
            UploadDocs,
            eSign,
            InPersonVerification
        });

        await Kyc.save(); // Use save() method instead of create() for more control and error handling

        // Send success response
        res.status(201).send({ message: "KYC verification done successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Some problem occurred", error: err.message });
    }
});

export default KYCrouter;
