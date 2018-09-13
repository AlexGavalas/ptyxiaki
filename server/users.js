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

    users.insert(data, (error, doc) => {

      if (error) console.log('ERROR');
    });
  }
};

module.exports = { getUser, createUser };
