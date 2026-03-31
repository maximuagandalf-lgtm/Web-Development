// 

const express = require('express')
const app = express()
const port = 3000

//app.get or app.put or app.delete or app.post('path', handler function)
// app.get('/', (req, res) => {
//   res.send('Hello World2!')
// })

// app.get('/about', (req, res) => {
//   res.send('Hello about!')
// })

app.use(express.static('public')) //files inside public forlder will be available for puvlic to access, used to protect backend code

app.get('/blog/:slug', (req, res) => {
    //For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params)//outputs the elemtns before ? in URL
    console.log(req.query)//ouputs the elements after ? in URL
  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello Javascript!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello Python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})