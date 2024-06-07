const mongoose=require("mongoose")
const createLoginSchema= new mongoose.Schema({
    Email:String,
    Password:String
})

const createLoginModel=mongoose.model("logins",createLoginSchema)
module.exports=createLoginModel