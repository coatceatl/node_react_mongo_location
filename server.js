const express = require('express');
const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
