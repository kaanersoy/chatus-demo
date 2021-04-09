const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const authRoute = require('./routes/auth.js');

// Middlewares
app.use(require('body-parser').json());
// Serve html files
app.use(express.static('public'));

app.use('/auth', authRoute);

io.on('connection', (socket) => {
  const user = {
    username: socket.handshake.auth.username
  };
});

http.listen(3000, () => {
  console.log('app is working');
});
