const db = require('../database');

class events {
  static retrieveAll (callback) {
    db.query('SELECT * from events', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAllWorkshops (wStr, callback) {
    db.query('SELECT title, id from events where eventtype = $1 ', [wStr], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAllEvents (wStr, callback) {
    db.query('SELECT title, id from events where eventtype = $1 ', [wStr], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (eventtime, eventtype, eventlocation, title, description, callback) {
    db.query('INSERT INTO events (eventtime, eventtype, eventlocation, title, description) VALUES ($1, $2, $3, $4, $5)', [eventtime, eventtype, eventlocation, title, description], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = events;
