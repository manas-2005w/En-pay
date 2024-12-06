import mongoose from "mongoose";



export default function connectdb()
{
    mongoose.connect("mongodb://localhost:27017/btechpracs")
.then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log(err)
})
}