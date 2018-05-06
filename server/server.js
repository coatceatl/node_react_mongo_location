const express = require('express');
const path = require('path');
const app = express();

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
