const express = require('express');
const session = require('express-session');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const db = require('./db');
const app = express();

const port = 3000;
const url = 'mongodb://localhost:27017';

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.use(session({
  secret: 'TSAIEMCIAO',
  cookie: { maxAge: 60000 * 60 * 2 },
  resave: true,
  saveUninitialized: true,
}));

db.connect(url, (err) => {
  if (err) {
    console.log('Unable to connect to db');
    process.exit(1);
  } else {
    app.listen(port);
  }
});
