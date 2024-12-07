import mongoose from "mongoose";

const accountTypes = ['Savings', 'Current'];

const proofOfIdentityTypes = [ 'Aadhar', 'PAN Card'];

const uploadDocsTypes = ['Photo', 'AddressProof', 'TaxReturn', 'BankStatement'];

const inPersonVerificationStatuses = ['Completed', 'Pending'];

const KYCSchema = mongoose.Schema(
  {
    AccountType: {
      type: String,
      required: true,
      enum: accountTypes, // Restrict values to accountTypes array
    },
    ProofOfIdentity: {
      type: String,
      required: true,
      enum: proofOfIdentityTypes, // Restrict values to proofOfIdentityTypes array
    },
    UploadDocs: {
      type: String,
      required: true,
      enum: uploadDocsTypes, // Restrict values to uploadDocsTypes array
    },
    eSign: {
      type: String,
      required: true,
      
    },
    InPersonVerification: {
      type: String,
      required: true,
      enum: inPersonVerificationStatuses, // Restrict values to inPersonVerificationStatuses array
    }
  },
  { timestamps: true }
);

// Model
const KYCModel = mongoose.model('KYC', KYCSchema);
export default KYCModel;
