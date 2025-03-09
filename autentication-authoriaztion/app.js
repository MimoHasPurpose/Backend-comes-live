const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
let a="";
app.use(cookieParser());
app.get('/',function(req,res){
    // res.cookie("name","harsh");
    res.send("done");
})

app.get("/jwt",function(req,res){
    let token=jwt.sign({email:"sanjay@gmail.com"},"secretshouldnotbeinplainletters")
    console.log(token);
    res.cookie("token",token);
    res.send("done");
    
});

app.get("/readjwt",function(req,res){
     console.log(req.cookies.token);
     
     let data=jwt.verify(req.cookies.token,"secretshouldnotbeinplainletters");
     res.send("<i>req.cookies.token </i> "+req.cookies.token+" <br><i>data is: </i>"+data.email);
    console.log(data);
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
        bcrypt.compare("mimo", a, function(err, result) {
            // result == true
            console.log("mimo "+result);
        });
        bcrypt.compare("mimi", a, function(err, result) {
            // result == true
            console.log("mimi "+result);
        });

    });

    res.send(`password ${a}`);
})

app.get("/read",function(req,res){
    console.log(req.cookies);
    res.send("read page");
})

app.listen(3000);