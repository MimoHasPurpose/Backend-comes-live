import express from 'express'
const app = express()
import  ejs from "ejs";

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/alpha',(req,res)=>{
    res.send('alpha boi')
})
app.get('/beta',(req,res)=>{
    res.send('beta boi boi')
})
app.get('/random',(req,res)=>{
  res.send(`here is a random number ${rand10()}`);
})

let rand10=function(){
  
    let a=Math.random();
    return a;
  
}
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

