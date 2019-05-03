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
  
  static checkRole (email, callback) {
    db.query('SELECT * from role where email = $1', [email], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
  
  static checkUser (email, callback) {
    db.query('SELECT COUNT(*) from role where email = $1', [email], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static update (email, edgerole, callback) {
    db.query('UPDATE role SET edgerole = $2 where email = $1', [email, edgerole], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (email, edgerole, callback) {
    db.query('INSERT INTO role (email, edgerole) VALUES ($1, $2)', [email, edgerole], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static delete (email, callback) {
    db.query('DELETE FROM role WHERE email = $1', [email], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}
module.exports = role;