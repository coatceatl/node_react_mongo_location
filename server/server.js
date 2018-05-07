const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.status(200).send('Hello world!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
