const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.get('/', function (req, res) {
//   // console.log("Someone requested")
// })

// app.get('/molly', function (req, res) {
//   console.log(req.query);
//   res.sendFile(__dirname+'/molly/index.html')
// })

app.listen(port,()=>{
  console.log(`Example at http://localhost:${port}`)
})
