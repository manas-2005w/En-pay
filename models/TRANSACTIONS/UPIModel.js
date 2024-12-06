import mongoose from "mongoose"

// schema for users
const UPISchema = mongoose.Schema(
    {
    UpiId:
    {
        type:Number,required:true
    },
    PhoneNo:
    {
        type:Number,required:true
    },
    Otp:
    {
        type:Number,required:true
    }
    },
    {timestamps:true})

// model
const UPIModel = mongoose.model('upi',UPISchema)
export default UPIModel