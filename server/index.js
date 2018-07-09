const express = require('express');
const session = require('express-session');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const app = express();
const user = require('./users');

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

app.get('/user', user.getUser);

app.listen(port);
