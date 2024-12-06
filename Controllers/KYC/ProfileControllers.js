import Router from "express";
import express from "express";
import ProfileModel from "../../models/KYCMODELS/ProfileModel.js";

const profilerouter = express.Router()

profilerouter.post("/",(req,res)=>
{
    const profile = req.body
    ProfileModel.create(profile)
    .then(()=>
    {
        res.status(201).send({message:"profile verification done"})
    })
    .catch ((err)=>
    {
        console.log(err)
        res.status(500).send ({message:"some problem"})
    })
})

export default profilerouter