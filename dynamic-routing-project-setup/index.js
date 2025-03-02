const express=require('express');
const app=express();
const path=require('path')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));       //setting up path for public
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
})
app.get("/profile/:username",function(req,res){
    
    res.send("Hello mimo friends "+req.params.username)

});
app.get("/interest/:player/:jersey",function(req,res){
    res.send(`well u love ${req.params.player} with jersey no: ${req.params.jersey}`)
})
app.listen(3000,function(){
    console.log("its running!")
    console.log("its running!")
})