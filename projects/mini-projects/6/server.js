const express = require('express')
const app = express()
const secret = "rock";
const port = 3200;
let gifts = [];

app.use(express.static('public'))

app.get('/choice',(req,res)=>{
  let query = req.query;
  let guess = query.word;
  if (guess == secret){
    console.log("go in")
    res.redirect("/win")
  }else{
    console.log("NO")
    res.redirect("/lose")
  }
  console.log("--------")
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
