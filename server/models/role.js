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
  
  static checkUserExists (email, callback) {
    db.query( 'SELECT COUNT(*) FROM Role WHERE email = $1', [email], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}
module.exports = role;