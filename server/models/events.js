const db = require('../database');

class events {
  static retrieveAll (callback) {
    db.query('SELECT title, eventdate from events', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAllWorkshops (wStr, callback) {
    db.query('SELECT title, eventdate from events where eventtype = $1 ', [wStr], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (title, eventtime, callback) {
    db.query('INSERT INTO events (title, eventdate) VALUES ($1,$2)', [title], [eventdate], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = events;