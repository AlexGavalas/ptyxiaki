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

module.exports = { getAll };
