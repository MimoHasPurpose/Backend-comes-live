const express=require('express');
const app=express();

const userModel=require('E:/Github/Backend-comes-live/mongoosevol-2/usermodel.js')
app.get('/',(req,res)=>{
    res.send('hey!')
})
app.get('/create',async(req,res)=>{
    //asynchronous code.[async code runs later..]
    let createduser= await userModel.create({
            name:"harsh",
            email:"harsh@gmail.com",
            username:"harsh"
    });
    //runs first
    res.send(createduser);
    console.log("hey")
})
app.listen(3000);



