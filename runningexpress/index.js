import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/alpha',(req,res)=>{
    res.send('alpha boi')
})
app.get('/beta',(req,res)=>{
    res.send('beta boi boi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
