const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { mainRouter } = require('./routes/main-router');
// const __dirname = "/public";

// Serve html files

app.use(express.static('public'));
app.use('/api', mainRouter);

http.listen(3000, () => {
    console.log("app is working")
})