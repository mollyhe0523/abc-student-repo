let express =require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  // console.log('id',socket.id);
  socket.on('message', (msg) => {
    console.log(msg);
    io.emit("incoming",msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected',socket.id);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
