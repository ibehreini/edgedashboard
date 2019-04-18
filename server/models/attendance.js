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

  static retrieveAttending (eventtime, callback) {
    db.query('SELECT * from attendance where eventtime = $1 ', [eventtime], (err, res) => {
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
