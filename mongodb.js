const mongoose = require("mongoose")
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/LoginSignUp") //mongodb database name LoginSignUp and 27017 -> this is a IP address
.then(()=>{
    console.log("connect");
})
.catch(()=>{
    console.log("failed");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema) //mongodb collection name Collection1

module.exports=collection