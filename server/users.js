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

const createUser = (data) => {

  const database = db.get();

  if (database) {

    const users = database.collection('users');

    users.insert(data, (error) => {

      if (error) console.log('ERROR');
    });
  }
};

const getAllUsers = (req, res) => {

  const database = db.get();

  if (database) {

    const users = database.collection('users');

    users.find({}).toArray((error, docs) => {

      if (error) console.log('ERROR');

      else {

        docs.forEach((doc) => {
          delete doc._id;
          delete doc.originalUsername;
        });

        res.json(docs);
      }
    });
  }
};

const updateUser = (user) => {

  const database = db.get();

  if (database) {

      const users = database.collection('users');

      users.update({ username: user.originalUsername }, user);
  }
};

const deleteUser = (data) => {

  const database = db.get();

  if (database) {

      const users = database.collection('users');

      users.remove({ username: data.data });
  }
};

module.exports = { getUser, createUser, getAllUsers, updateUser, deleteUser };
