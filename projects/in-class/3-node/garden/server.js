const express = require('express')
const app = express()
// const port = 3010
const secret = "paperclip";
const port = process.env.PORT
let gifts = [];

app.use(express.static('public'))

app.get('/secret',(req,res)=>{
  let query = req.query;
  let guess = query.word;
  if (guess == secret){
    console.log("go in")
    res.redirect("/garden")
    // res.sendFile(__dirname+"/public/garden/index.html")
  }else{
    console.log("NO")
    res.redirect("/fishy")
    // res.sendFile(__dirname+"/public/fishy/index.html")
  }
  console.log("--------")
})

app.get('/gift',(req,res)=>{
  let query = req.query;
  let gift = query.gift;
  gifts.push(gift);
  console.log("received:",gift);
  console.log("all the gifts:",gifts);

})

app.get('/getGifts',(req,res)=>{
  console.log("someone asks for gifts")
  res.json({content:gifts,sender:"the garden gods"});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
