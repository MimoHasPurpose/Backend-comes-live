
require('dotenv').config()
const express = require('express')
const app = express()

const apidata={
    "name":"Sanjay Singh",
    "interst":"coding"
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tweet', (req, res) => {
    res.send('Hello World!')
  })
app.get('/apidata',(req,res)=>{
    res.json(apidata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

