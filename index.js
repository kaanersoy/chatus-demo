const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { mainRouter } = require('./routes/main-router');
const io = require('socket.io')(http);
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Middlewares
app.use(require('body-parser').json());
app.use(cookieParser());

const sessionWithOptions = session({
  secret: 'ITSASECRETKEY123163516253',
  name: 'username_cookie',
  proxy: true,
});
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

io.on('connection', (socket) => {
  console.log('HEY');
  socket.on('chat message', () => {
    console.log('Messsaj var AMCIK');
  });
});

http.listen(3000, () => {
  console.log('app is working');
});
