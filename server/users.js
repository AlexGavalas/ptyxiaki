const db = require('./db');

const getUser = (credentials, cb) => {

  const database = db.get();

  credentials.password = +credentials.password;

  if (database) {

    const users = database.collection('users');

    users.find(credentials).toArray((error, doc) => {

      if (error || doc.length === 0) cb(true);

      else cb(false, doc[0]);
    });
  }

  else cb(true);
};

module.exports = { getUser };
