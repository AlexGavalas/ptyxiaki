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

    const curriculum = req.body;

    const courses = Object.keys(curriculum.courses).map((id) => ObjectID(id));

    curriculums.insert({ title: curriculum.title, courses }, (error, doc) => {

      if (error) console.log('ERROR');

      curriculums.find({ title: curriculum.title }).toArray((error, doc) => {

        const curID = doc[0]._id;

        courses.forEach((id) => {

          database.collection('courses').find({ _id: id }).toArray((error, doc) => {

            const toUpdate = doc[0];

            if (!toUpdate.curriculumNames) toUpdate.curriculumNames = {};

            if (!toUpdate.ids) toUpdate.ids = {};

            toUpdate.curriculumNames[curID] = curriculum.courses[id].maidenName;

            toUpdate.ids[curID] = curriculum.courses[id].id;

            database.collection('courses').update({ _id: id }, toUpdate);
          });
        });
      });
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

    const courses = database.collection('courses');

    curriculums.find({ title: req.body.data }).toArray((error, doc) => {

      if (error) console.log('ERROR');

      else {

        courses.find({ _id: { $in: doc[0].courses }}).toArray((error, docs) => {

            if (error) console.log('ERROR');

            else res.json({ title: doc[0].title, courses: docs, _id: doc[0]._id });
        });
      }
    });
  }
};

const deleteCourse = (req, res) => {

  const database = db.get();

  if (database) {

    const courses = database.collection('courses');

    courses.remove({ _id: ObjectID(req.body._id) });
  }
};

const setProfessorToCourse = (req, res) => {

  const database = db.get();

  if (database) {

    const courses = database.collection('courses');

    courses.find({ _id: ObjectID(req.body.courseId) }).toArray((error, doc) => {

      if (error) console.log('ERROR');

      else {

        const toUpdate = doc[0];

        if (!toUpdate.hours) toUpdate.hours = {};

        if (!toUpdate.hours[req.body.professor._id]) toUpdate.hours[req.body.professor._id] = req.body;

        else Object.keys(req.body).forEach((item) => typeof req.body[item] !== 'object' ? toUpdate.hours[req.body.professor._id][item] += req.body[item] : null);

        courses.update({ _id: ObjectID(req.body.courseId) }, toUpdate);
      }
    });
  }
};

const removeProfFromCourse = (req, res) => {

  const database = db.get();

  if (database) {

    const courses = database.collection('courses');

    courses.find({ _id: ObjectID(req.body.courseId) }).toArray((error, doc) => {

      if (error) console.log('ERROR');

      else {

        delete doc[0].hours[req.body.professor._id];

        courses.update({ _id: ObjectID(req.body.courseId) }, doc[0]);
      }
    });
  }
};

module.exports = { getAllCourses, setCourse, createCurriculum, getCurriculums, updateCourse, fetchCoursesForOneCurriculum, deleteCourse, setProfessorToCourse, removeProfFromCourse };
