const db = require('./db');


const getUser = (req, res) => {
  const database = db.get();
  const userData = req.body;
  userData.password = +userData.password;

  if (database) {
    const users = database.collection('users');

    users.find(userData).toArray((error, doc) => {
      if (error || doc.length === 0) {
        console.log('ERROR');
        res.json({ error: true });
      }
      else res.json({user: userData,error: false});
    });
  } else res.json({ error: true });
};

module.exports = { getUser };
