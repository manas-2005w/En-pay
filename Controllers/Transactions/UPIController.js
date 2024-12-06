import Router from "express";
import express from "express";
import UPIModel from "../../models/TRANSACTIONS/UPIModel.js";

const UPIrouter = express.Router()

UPIrouter.post("/",(req,res)=>
{
    const upi = req.body
    UPIModel.create(upi)
    .then(()=>
    {
        res.status(201).send({message:"UPI Payment done"})
    })
    .catch ((err)=>
    {
        console.log(err)
        res.status(500).send ({message:"some problem"})
    })
})

export default UPIrouter