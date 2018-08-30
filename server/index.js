const express = require('express');
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

db.connect(url, (err) => {
  if (err) {
    console.log('Unable to connect to db');
    process.exit(1);
  } else {
    app.listen(port);
  }
});
