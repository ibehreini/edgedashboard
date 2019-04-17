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
    db.query('SELECT title, eventdate from events where eventtype = $1 ', [wStr], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAllEvents (wStr, callback) {
    db.query('SELECT title, eventdate from events where eventtype = $1 ', [wStr], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (eventdate, eventtype, eventlocation, title, description, eventtime, callback) {
    db.query('INSERT INTO events (eventdate, eventtype, eventlocation, title, description, eventtime) VALUES ($1, $2, $3, $4, $5, $6)', [eventdate, eventtype, eventlocation, title, description, eventtime], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = events;