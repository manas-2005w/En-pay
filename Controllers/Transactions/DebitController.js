import express from "express";
import bcrypt from "bcryptjs";
import DebitModel from "../../models/TRANSACTIONS/DebitModel.js";

const Debitrouter = express.Router();

Debitrouter.post("/", async (req, res) => {
    try {
        // Extract debit details from the request body
        const { CardNumber, CVV, HolderName, ExpiryDate } = req.body;

        const saltCardNumber = await bcrypt.genSalt(10);
        const hashedCardNumber = await bcrypt.hash(CardNumber.toString(), saltCardNumber);

        
        const saltCVV = await bcrypt.genSalt(10);
        const hashedCVV = await bcrypt.hash(CVV.toString(), saltCVV);

      
        const debit = new DebitModel({
            CardNumber: hashedCardNumber,
            HolderName,
            CVV: hashedCVV,
            ExpiryDate,
        });

       
        await debit.save();

        res.status(201).send({ message: "Payment done" });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Some problem occurred" });
    }
});

export default Debitrouter;
