const db = require('../database');

class attendance {
  static retrieveAll (callback) {
    db.query('SELECT * from attendance', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = attendance;