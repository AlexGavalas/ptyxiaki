const ObjectID = require('mongodb').ObjectID;
const db = require('./db');

const getUser = (credentials, cb) => {

  const database = db.get();

  if (database) {

    const users = database.collection('users');

    users.find(credentials).toArray((error, doc) => {

      if (error || doc.length === 0) cb(true);

      else cb(false, doc[0]);
    });
  }

  else cb(true);
};

const createUser = (req, res) => {

  const database = db.get();

  if (database) {

    const users = database.collection('users');

    users.insert(req.body);
  }
};

const getAllUsers = (req, res) => {

  const database = db.get();

  if (database) {

    const users = database.collection('users');

    users.find().toArray((error, docs) => {

      if (error) res.json({ error: true });

      else res.json(docs);
    });
  }
};

const updateUser = (req, res) => {

  const database = db.get();

  if (database) {

    const user = req.body;

    user._id = ObjectID(user._id);

    const users = database.collection('users');

    users.update({ _id: user._id }, user);
  }
};

const deleteUser = (req, res) => {

  const database = db.get();

  if (database) {

    const users = database.collection('users');

    users.remove({ _id: ObjectID(req.body._id) });
  }
};

module.exports = { getUser, createUser, getAllUsers, updateUser, deleteUser };
