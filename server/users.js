const db = require('./db');

const getUser = (req, res) => {
  const database = db.get();

  if (database) {
    const users = database.collection('users');

    users.find({ username: 'alex' }).toArray((error, doc) => {
      if (error) {
        console.log('ERROR');
        res.json({ error: true });
      }

      res.json(doc);
    });
  } else res.json({ error: true });
};

const checkUser = (data, res) => {
  const database = db.get();

  if (database) {
    const users = database.collection('users');

    users.find(data).toArray((err, doc) => {
      if (err) {
        console.log('ERROR');
        res.json({ error: true });
      }

      if (doc.length === 0) res.json('HACKER');

      else res.json('KOMPLE');
    });
  }
};

module.exports = { getUser, checkUser };
