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

module.exports = { getUser };
