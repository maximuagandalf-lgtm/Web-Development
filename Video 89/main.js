const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static("public"))

// app.get('/', (req, res) => {
//   console.log("Hey! its a get request")
//   res.send('Hello World!')
// }) //used for normal text

app.post('/', (req, res) => {
  console.log("Hey! its a post request")
  res.send('Hello World post')
})

app.use('/blog', blog)
app.use('/shop', shop)

app.put('/', (req, res) => {
  console.log("hey! its a pu request")
  res.send("Hello World put")
})

app.get("/index", (req, res)=>{
  console.log("Hey, its a index")
  res.sendFile('templates/index.html', {root: __dirname}) //used to serve a html file
})

app.get("/api", (req, res)=>{
  console.log("Hey, its a api")
  res.json("a:1, b:2, c:3, d:4")}) //used to serve json

app.delete('/', (req, res) => {
  console.log("Hey! its a delete request")
  res.send("Hello world delete")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
