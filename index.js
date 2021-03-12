const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { mainRouter } = require('./routes/main-router');
const io = require('socket.io')(http);
const cookieParser = require('cookie-parser');
const { sessionWithOptions } = require('./helpers/session');

// Middlewares
app.use(require('body-parser').json());
app.use(cookieParser());
app.use(sessionWithOptions);

// Serve html files
app.use(express.static('public'));

app.use('/auth', mainRouter);

app.get('/chat', (req, res) => {
  if (!req.session.username_session) {
    return res.redirect('/');
  }
  res.sendFile(__dirname + '/public/chat.html');
});

let activeUsers = [];

io.on('connection', (socket) => {
  const user = {
    username: socket.handshake.auth.username,
  };
  activeUsers.push(user);
  const sendRequest = { usercount: activeUsers.length, users: activeUsers };

  socket.emit('user_count', sendRequest);
  socket.broadcast.emit('user_count');

  socket.on('disconnect', () => {
    activeUsers = activeUsers.filter(
      (user) => user.username == socket.handshake.auth.username
    );
    console.log(activeUsers);
    socket.broadcast.emit('user_count', sendRequest);
  });
});

http.listen(3000, () => {
  console.log('app is working');
});
