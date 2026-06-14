const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const port = 3000;
const mongoose = require('mongoose');
const employee = require('./models/employee')
mongoose.connect('mongodb://127.0.0.1:27017/company');

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

const random = (arr)=>{
  let randnum = Math.floor(Math.random()*(arr.length - 1));
  return randnum
}

app.get('/generate', async(req, res) => { //add sync when using mongodb functions
  //clear the collection
  await employee.deleteMany({})
  //generate dummy data
  let randomlang = ["Java", "C++", "PHP", "Javascript"]
  let randomnames = ["Rohan", "Sohan", "Mohan", "Ayush"];
  let randomcity = ["Bilaspur", "Kolkata", "Moradabad", "Delhi"];

  for (let index = 0; index < 10; index++) {
    let a = await employee.create({
      name: random(randomnames), 
      salary: Math.floor(Math.random()*22000), //will give any values b/w 0 and 22k
      language: random(randomlang), 
      city: random(randomcity), 
      isManager: (Math.random()>0.5)?true:false
    })
    console.log(a);
    
  }
  res.json({message: "Data Generated Successfully!"}); //res.render(parses an whole html page), this parses a json fiel to the console
});

app.use('/src', express.static('src'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});