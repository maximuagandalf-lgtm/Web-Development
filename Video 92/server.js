const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
 
app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchtext = "Search Now"
    let arr = [1,34,56]
  res.render("index", {siteName: siteName, searchtext:searchtext, arr:arr})
}) //connects frontend with back end

app.get('/blog/:slug', (req, res)=>{
    let blogTitle = "Adidas why and when?"
    let blogContent = "Cause it is a good brand"
    res.render('blogpost', {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})