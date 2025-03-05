const mongoose=require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/data`);
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String
})

//model creation: for CRUD Operations.
module.exports=mongoose.model("user",userSchema);