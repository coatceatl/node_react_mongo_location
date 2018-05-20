const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect('mongodb://localhost:27017/location');
const app = express();

app.use(express.static(__dirname));

authRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
