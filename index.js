import  express  from "express";
import { connect } from "mongoose";
import connectdb from "./dbconnection.js";
import KYCModel from "./models/KYCMODELS/KYCModel.js";
import ProfileModel from "./models/KYCMODELS/ProfileModel.js";
import profilerouter from "./Controllers/KYC/ProfileControllers.js";
import KYCrouter from "./Controllers/KYC/KycController.js";
import DebitModel from "./models/TRANSACTIONS/DebitModel.js";
import Debitrouter from "./Controllers/Transactions/DebitController.js";
import UPIrouter from "./Controllers/Transactions/UPIController.js";



const app = express()
connectdb()
app.use(express.json())

app.use("/Profile",profilerouter)
app.use("/Kyc",KYCrouter)
app.use("/debit",Debitrouter)
app.use("/upi",UPIrouter)




app.listen(8000,()=>{
    console.log("Server is up and running")
})