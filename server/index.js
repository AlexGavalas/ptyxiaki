const express = require('express');
const session = require('express-session');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const app = express();

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

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

app.listen(port, () => {
  app.get('/user', (req, res) => {
    console.log(22);
    res.json({ one: one });
  });
});
