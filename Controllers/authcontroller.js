import userModel from "../models/usermodel.js";

export async function userRegister(req,res){

    let user = req.body;

    try{
        await userModel.create(user)
        res.status(201).send({message:"User is created"})
    }
    catch(err){
        res.status(500).send({message:"some problem"})
    }
}