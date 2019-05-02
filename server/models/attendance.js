const db = require('../database');

class EventAttendance
{
  static attendingIds( userKey, callback )
  {
    db.query( 'SELECT id FROM Events WHERE username = $1', [userkey],
              (err, res) => { if (err.error)
                                return callback(err);
                              callback(res);
                            } );
  }

  static retrieveAll (callback) {
    db.query('SELECT * from attendance', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAttending (event, callback) {
    db.query('SELECT * from attendance where event = $1 ', [event], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static checkSignUpStatus (username, callback) {
    db.query('SELECT * from attendance where username = $1', [username], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }


  static insertAttending (event, username, transportneeds, notes, callback) {
    db.query('INSERT INTO attendance (event, username, transportneeds, notes) VALUES ($1, $2, $3, $4)', [event, username, transportneeds, notes], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert( eventKey, userKey, transportation, notes, callback )
  {
    const qstring = db.queryMaker( 'Attendance' ).insert(
                    { eventKey, userKey, transportation, notes } ).toString()
    db.query( qstring,
              (err, res) => { if (err.error)
                                return callback(err);
                              callback(res);
                             } )
  }
}

module.exports = EventAttendance;
