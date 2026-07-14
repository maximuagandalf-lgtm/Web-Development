import express from "express";
import cors from "cors"; // This resolves all the server errors cause due to cors policy.

//restart the server after importing cors
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res)=>{
     console.log("username: ", req.body.username)
     console.log("password: ", req.body.password)
    res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});