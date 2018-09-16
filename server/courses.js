const db = require('./db');

const getAllCourses = (req, res) => {

  const database = db.get();

  if (database) {

    const courses = database.collection('courses');

    courses.find().toArray((error, docs) => {

      if (error) console.log('ERROR');

      else res.json(docs);
    });
  }
};

const setCourse = (req, res) => {

  const database = db.get();

  if (database) {

    const courses = database.collection('courses');

    courses.insert(req.body, (error) => {

      if (error) console.log('ERROR');
    });
  }
};

module.exports = { getAllCourses, setCourse };
