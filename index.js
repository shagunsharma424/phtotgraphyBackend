const mongoose=require("mongoose");
const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors())
mongoose.connect("mongodb://localhost:27017/photography");
const Photos=require("./db/Photos")
const LoginModel=require("./db/Login")
const commentsModel=require("./db/Comments")
app.use(express.json())

app.get("/photo",async(req,resp)=>{
    const result=await Photos.find();
    resp.send(result)
})

app.get("/getPhotoDetails/:id",async(req,resp)=>{
    const prductId=req.params.id
    let data=await Photos.findOne({_id:prductId});
    resp.send(data)
})

app.post("/add-photo",async(req,resp)=>{
    // console.log(req.body)
    let result=await Photos(req.body)
    result=await result.save();
    resp.send(result);
})

app.put("/updateRecord/:id",async(req,resp)=>{
    const recordId=req.params.id;
    let result=await Photos.updateOne({_id:recordId},{$set:req.body})
    resp.send({result:"Data Updated SuccessFully"})
    console.log("parmas",result)
})

app.delete("/deleteRecord/:id",async(req,resp)=>{
    console.log("reqds",req.params.id)
    const data=await Photos.deleteOne({_id:req.params.id})
    resp.send({data:"Deleted SuccessFully"})
})

app.post("/login",async(req,resp)=>{
        let postLoginInfo=await LoginModel(req.body);
        console.log("postLoginInfo",postLoginInfo)

})

app.get("/getcomments/:id",async(req,resp)=>{
    console.log("params",req.params.id)
    let getComments=await commentsModel.find({refId:req.params.id});
    resp.send(getComments)
    // console.log("getComments",getComments)
})

app.post("/postComment",async(req,resp)=>{
    let getComments=await commentsModel(req.body);
    getComments=await getComments.save()
    // console.log("postComments",req.body)
    resp.send(getComments)
})
app.listen(5002)