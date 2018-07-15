const db = require('./db');
const url = 'mongodb://localhost:27017';

const getUser = (req, res) => {
  const database = db.connect(url);

  if (database) {
    const users = database.collection('users');

    users.find({ username: 'alex' }).toArray((error, doc) => {
      if (error) console.log('ERROR');

      res.json(doc);
    });
  } else res.json({});
};

const checkUser = (data, res) => {
  const database = db.connect(url);

  if (database) {
    const users = database.collection('users');

    users.find(data).toArray((err, doc) => {
      if (err) console.log('ERROR');

      if (doc.length === 0) res.json('HACKER');

      else res.json('KOMPLE');
    });
  }
};

module.exports = { getUser, checkUser };
