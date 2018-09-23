const ObjectID = require('mongodb').ObjectID;
const db = require('./db');

const getAll = (req, res) => {

  const database = db.get();

  if (database) {

    const professors = database.collection('professors');

    professors.find().toArray((error, docs) => {

      if (error) console.log('ERROR');

      else res.json(docs);
    });
  }
};

const createProfessor = (req, res) => {

  const database = db.get();

  if (database) {

    const professors = database.collection('professors');

    professors.insert(req.body, (error) => {

      if (error) console.log('ERROR');
    });
  }
};

const updateProfessor = (req, res) => {

  const database = db.get();

  if (database) {

    const professors = database.collection('professors');

    const toUpdate = req.body;

    toUpdate._id = ObjectID(toUpdate._id);

    professors.update({ _id: toUpdate._id }, toUpdate);
  }
};

const deleteProfessor = (req, res) => {

  const database = db.get();

  if (database) {

    const professors = database.collection('professors');

    professors.remove({ _id: ObjectID(req.body._id) });
  }
};

module.exports = { getAll, createProfessor, updateProfessor, deleteProfessor };
