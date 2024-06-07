const mongoose=require("mongoose");
const createPhotosSchema=new mongoose.Schema({
        PhotoLink:String,
        PhotoType:String,
        PhotoHeading:String,
        PhotodataAndtime:String,
        Description:String,
        Quote:String,
        
})
module.exports=mongoose.model("photos",createPhotosSchema)