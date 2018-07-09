const MongoClient = require('mongodb').MongoClient;

const state = { db: null };

const connect = (url) => {
  if (state.db) return state.db;

  return MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log('ERROR');
      return null;
    }

    state.db = client.db('myDB');

    return state.db;
  });
};

module.exports = { connect };
