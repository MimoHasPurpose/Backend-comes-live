
require('dotenv').config()
const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tweet', (req, res) => {
    res.send('Hello World!')
  })
app.get('/chai',(req,res)=>{
    res.send('<h2>chai or code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

