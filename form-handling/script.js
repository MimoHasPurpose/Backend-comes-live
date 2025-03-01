const express=require('express');
const app=express();
//to make it readable.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// route
app.get("/",function(req,res){
    res.send("Hello mimo boss!!");
})
// about page
app.get("/about",function(req,res){
    res.send("this is about page ");
})
// profile page
app.get("/profile",function(req,res,next){
    return next(new Error("not implemented"));
})