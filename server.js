const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost:27017/location');
const app = express();

app.use(express.static(__dirname));

authRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
