import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        // required:true
    }

},{timestamps:true})

const userModel = mongoose.model("Users",userSchema)

export default userModel