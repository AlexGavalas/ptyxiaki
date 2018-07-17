const MongoClient = require('mongodb').MongoClient;

const state = { db: null };

const connect = (url, done) => {
  if (state.db) done();

  MongoClient.connect(url, (err, client) => {
    if (err) done(err);
    state.db = client.db('myDB');
    done();
  });
};

const close = (done) => {
  if (state.db) {
    state.db.close((err) => {
      state.db = null;
      done(err);
    });
  }
};

const get = () => state.db;

module.exports = { connect, get, close };
