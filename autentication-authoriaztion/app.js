const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
let a="";
app.use(cookieParser());
app.get('/',function(req,res){
    res.cookie("name","harsh");
    res.send("done");
})
app.get("/password",function(req,res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("mimo", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log('Salt is'+salt);
             a=hash;
             console.log('Hash is password'+a);
            // console.log(hash); // password.
        });
    });
    res.send(`password ${a}`);
})

app.get("/read",function(req,res){
    console.log(req.cookies);
    res.send("read page");
})

app.listen(3000);