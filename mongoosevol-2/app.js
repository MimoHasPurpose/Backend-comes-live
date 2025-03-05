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
app.get('/update',async(req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({username:"harsh"},{name:"sanjay"},{new:true})
    res.send(updateduser)
    console.log("bolo");
})

//read data
app.get('/read',async(req,res)=>{
    // let users=await userModel.find();
    // let user2=await userModel.find({username:"sanjay"});
    let user3=await userModel.find({name:"sanjay"});
    res.send(user3);
    
})
app.get('/delete',async(req,res)=>{
    let user4 = await userModel.findOneAndDelete({name:'sanjay'});
    res.send(user4);
})





app.listen(3000);



