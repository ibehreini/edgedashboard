const db = require('../database');

class mentorhours
{
  static retrieveAll (callback) {
    db.query('SELECT * from mentorhours', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insertHours (username, period, hours, justification, notes, callback) {
    db.query('INSERT INTO mentorhours (username, period, hours, justification, notes) VALUES ($1, $2, $3, $4, $5)', [username, period, hours, justification, notes], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}
module.exports = mentorhours;