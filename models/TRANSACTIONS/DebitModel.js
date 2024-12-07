import mongoose from "mongoose";

// Schema for Debit Card
const DebitSchema = mongoose.Schema(
    {
        CardNumber: {
            type: String, 
            required: true,
        },
        HolderName: {
            type: String,
            required: true,
        },
        CVV: {
            type: String, 
            required: true,
        },
        ExpiryDate: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

// Model
const DebitModel = mongoose.model("Debit", DebitSchema);
export default DebitModel;
