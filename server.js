const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-pauth20');
const keys = require('./config/keys');

const app = express();

app.use(express.static(__dirname));

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
