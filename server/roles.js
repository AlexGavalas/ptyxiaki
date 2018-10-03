const ObjectID = require('mongodb').ObjectID;
const db = require('./db');

const createRole = (req, res) => {

  const database = db.get();

  if (database) {

    const roles = database.collection('roles');

    roles.insert(req.body);
  }
};

const fetchAllRoles = (req, res) => {

  const database = db.get();

  if (database) {

    const roles = database.collection('roles');

    roles.find().toArray((error, docs) => {

      if (error) console.log('ERROR');

      else res.json(docs);
    })
  }
};

const updateRole = (req, res) => {

  const database = db.get();

  if (database) {

    const roles = database.collection('roles');

    roles.find({ _id: ObjectID(req.body._id) }).toArray((error, doc) => {

      if (error) console.log('ERROR');

      else {

        const toUpdate = doc[0];

        toUpdate.role = req.body.role;

        roles.update({ _id: ObjectID(req.body._id) }, toUpdate);
      }
    });
  }
};

const deleteRole = (req, res) => {

  const database = db.get();

  if (database) {

    const roles = database.collection('roles');

    roles.remove({ _id: ObjectID(req.body._id) });
  }
};

module.exports = { createRole, fetchAllRoles, updateRole, deleteRole };
