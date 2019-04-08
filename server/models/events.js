const db = require('../database');

class events {
  static retrieveAll (callback) {
    db.query('SELECT title, eventtime from events', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (event, callback) {
    db.query('INSERT INTO events (title, eventtime) VALUES ($1,$2)', [title], [eventtime], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = events;