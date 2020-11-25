let express =require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let userCount = 0;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  userCount++;
  console.log(userCount);
  socket.emit("count",userCount);

  if (userCount >= 5){
    io.emit("full");
  }
  socket.on('disconnect', () => {
    console.log('user disconnected',socket.id);
    userCount--;
  });
});

http.listen(3010, () => {
  console.log('listening on *:3010');
});
