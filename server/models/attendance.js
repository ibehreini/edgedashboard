const db = require('../database');

const table = db.queryMaker( 'Attendance' );

const querycallback = (err, res) =>
{
  if (err.error)
    return callback(err);
  callback(res);
}

class EventAttendance
{
  static attendingIds( userKey, callback )
  {
    const qstring = table.select( 'id' ).where( 'username', userKey ).toString();
    db.query( qstring, querycallback );
  }

  static retrieveAll (callback) {
    db.query('SELECT * from attendance', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAttending( eventId, callback )
  {
    const qstring = table.select().where( 'event', eventId );
    db.query( qstring, querycallback );
  }

  static insertAttending (event, username, transportneeds, notes, callback)
  {
    const qstring = table.insert( { 'event': event,
                                    'username': username,
                                    'transportNeeds': transportneeds,
                                    'notes': notes } ).toString()
    db.query( qstring, querycallback );
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
