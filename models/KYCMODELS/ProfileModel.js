import mongoose from "mongoose";

// Schema for users
const ProfileSchema = mongoose.Schema(
    {
        MaritialStatus: {
            type: String,
            enum: ["Single", "Married", "Divorced", "Widowed"],
            required: true,
        },
        AnnualIncome: {
            type: String,
            enum: ["<12000", "12000-50000", ">50000"],
            required: true,
        },
        TradingExprience: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
            required: true,
        },
        Occupation: {
            type: String,
            enum: ["Unemployed", "Student", "Employed", "Self-Employed", "Retired"],
            required: true,
        },
    },
    { timestamps: true }
);

// Model
const ProfileModel = mongoose.model("Profile", ProfileSchema);
export default ProfileModel;
