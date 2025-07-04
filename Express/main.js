const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/about',  (req, res)=>{
  res.send('About page')
})
app.get('/contactUs',  (req, res)=>{
  res.send('COntact page')
})
app.get('/Home',  (req, res)=>{
  res.send('Home page')
})


// Using slug 
app.get('/Home/:slug/',  (req, res)=>{
  res.send(`This is ${req.params.slug}`)
})
