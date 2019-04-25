const db = require('../database');

class role
{
  
  static checkUser (email, callback) {
    db.query('SELECT * from role where email = $1 ', [email], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}
module.exports = role;