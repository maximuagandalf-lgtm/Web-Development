const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const blog = require('./routes/blogs')


// app.use(express.static('public'))

//middleware 1 -- logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.ayush = "I am ayush"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    //next() //if next is not used then the req is left hanging and website keeps reloading and ther is no response. The next middleware doesn't get access to request
    //res.send("Hacked by Middleware 1")
    next()
})

app.use('/blog', blog)

//middleware 2
app.use((req, res, next) => {
    console.log('M2')
    req.ayush = "I am Rohan"
    next()
})

app.get('/about', (req, res) => {
  res.send('Hello World!' + req.ayush) // middleware are used to make changes to all the requests.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})