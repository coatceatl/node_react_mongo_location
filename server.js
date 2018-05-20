const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.static(__dirname));

authRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
