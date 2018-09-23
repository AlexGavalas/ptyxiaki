const ObjectID = require('mongodb').ObjectID;
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

const createCurriculum = (req, res) => {

  const database = db.get();

  if (database) {

    const curriculums = database.collection('curriculums');

    curriculums.insert(req.body, (error) => {

      if (error) console.log('ERROR');
    });
  }
}

const getCurriculums = (req, res) => {

  const database = db.get();

  if (database) {

    const curriculums = database.collection('curriculums');

    curriculums.find().toArray((error, docs) => {

      if (error) console.log('ERROR');

      else res.json(docs);
    });
  }
}

const updateCourse = (req, res) => {

  const database = db.get();

  if (database) {

      const courses = database.collection('courses');

      const toUpdate = Object.assign({}, req.body);

      delete toUpdate._id;

      courses.update({ _id: ObjectID(req.body._id) }, toUpdate);
  }
};

const fetchCoursesForOneCurriculum = (req, res) => {

  const database = db.get();

  if (database) {

    const curriculums = database.collection('curriculums');

    curriculums.find({ title: req.body.data }).toArray((error, doc) => {

      if (error) console.log('ERROR');

      else res.json(doc[0]);
    });
  }
};

const deleteCourse = (req, res) => {

  const database = db.get();

  if (database) {

    const courses = database.collection('courses');

    courses.remove({ _id: ObjectID(req.body._id) });
  }
}

module.exports = { getAllCourses, setCourse, createCurriculum, getCurriculums, updateCourse, fetchCoursesForOneCurriculum, deleteCourse };
