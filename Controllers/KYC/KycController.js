import Router from "express";
import express from "express";
import KYCModel from "../../models/KYCMODELS/KYCModel.js";

const KYCrouter = express.Router()

KYCrouter.post("/",(req,res)=>
{
    const Kyc = req.body
    KYCModel.create(Kyc)
    .then(()=>
    {
        res.status(201).send({message:"Kyc verification done"})
    })
    .catch ((err)=>
    {
        console.log(err)
        res.status(500).send ({message:"some problem"})
    })
})

export default KYCrouter