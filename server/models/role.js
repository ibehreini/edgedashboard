const db = require('../database');

class role
{
  static retrieveAll (callback) {
    db.query('SELECT * from role', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
  
  static checkUser (email, callback) {
    db.query('SELECT * from role where email = $1 ', [email], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}
module.exports = role;