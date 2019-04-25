const db = require('../database');

class login
{
  
  static checkUser (username, callback) {
    db.query('SELECT * from login where username = $1 ', [username], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}
module.exports = login;