const socket = io();
socket.on('message', () => {
  console.log('message');
});
