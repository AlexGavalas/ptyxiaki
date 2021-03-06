module.exports = (app, options) => {

  const isProd = process.env.NODE_ENV === 'production';

  const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
  const addDevMiddlewares = require('./addDevMiddlewares');
  addDevMiddlewares(app, webpackConfig);

  return app;
};
