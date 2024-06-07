const mongoose=require("mongoose")
const createSchema=new mongoose.Schema({
    refId:String,
    email:String,
    name:String,
    date:String,
    comment:String
})
const createModel=mongoose.model("comments",createSchema)

module.exports=createModel