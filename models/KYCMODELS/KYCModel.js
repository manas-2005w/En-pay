import mongoose from "mongoose"

// schema for users
const KYCSchema = mongoose.Schema(
    {
    AccountType:
    {
        type:String,required:true
    },
    ProofOfIdentity:
    {
        type:String,required:true
    },
    UploadDocs:
    {
        type:String,required:true
    },
    eSign:
    {
        type:String, required: true
    },
    InPersonVerification:
    {
        type:String, required:true
    }
    },
    {timestamps:true})

// model
const KYCModel = mongoose.model('KYC',KYCSchema)
export default KYCModel