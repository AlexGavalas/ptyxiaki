const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const user = require('../users');
const courses = require('../courses');
const professors = require('../professors');
const roles = require('../roles');
const userRouter = require('../routes/userRoutes');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.use(session({
    secret: 'TSAIEMCIAO',
    cookie: { maxAge: 60000 * 60 * 2 },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ url: 'mongodb://localhost:27017' }),
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  passport.use('local', new Strategy((username, password, done) => {
    user.getUser({ username, password }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, user);
    })
  }));

  app.use(userRouter);

  app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' }));
  app.post('/setCourse', courses.setCourse);
  app.post('/createCurriculum', courses.createCurriculum);
  app.post('/updateCourse', courses.updateCourse);
  app.post('/fetchCoursesForOneCurriculum', courses.fetchCoursesForOneCurriculum);
  app.post('/createProfessor', professors.createProfessor);
  app.post('/updateProfessor', professors.updateProfessor);
  app.post('/deleteProfessor', professors.deleteProfessor);
  app.post('/deleteCourse', courses.deleteCourse);
  app.post('/setProfessorToCourse', courses.setProfessorToCourse);
  app.post('/removeProfFromCourse', courses.removeProfFromCourse);
  app.post('/newRole', roles.createRole);
  app.post('/updateRole', roles.updateRole);
  app.post('/deleteRole', roles.deleteRole);
  app.post('/getALlExceptTheseCourses', courses.getALlExceptTheseCourses);
  app.post('/updateCurriculum', courses.updateCurriculum);

  app.get('/user', (req, res) => res.json({ user: req.user || null }));
  app.get('/getAllCourses', courses.getAllCourses);
  app.get('/getCurriculums', courses.getCurriculums);
  app.get('/getAllProfessors', professors.getAll);
  app.get('/fetchAllRoles', roles.fetchAllRoles);

  app.get('/logout', (req, res) => {

    for (let cookie in req.cookies) res.clearCookie(cookie);

    req.logout();

    res.redirect('/');
  });

  app.get('*', (req, res) => {

    if (req.user) {

      fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {

        if (err) res.sendStatus(404);

        else res.send(file.toString());
      });
    }

    else res.redirect('/');
  });
};
