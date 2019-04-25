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
  /*Gets event details + whether or not this user is attending them*/
  static retrieveEvents( userKey, callback )
  {
    /*Original query:
      SELECT ( Attendance.event NOTNULL ) AS attending, Events.* FROM Events
      LEFT JOIN (SELECT Attendance.event FROM Attendance
                 WHERE username = userKey ) Attendance
      ON Attendance.event = Events.id;*/
          //Filter to the current user's attendance records
    const attendanceTable = table.select( 'event' ).where( 'username', userKey
                              ).as( 'Attendance' ),
          //Select boolean record of attending
          isAttending = db.queryMaker.raw( "Attendance.event" ).havingNotNull(),
          //All together now
          qstring = db.queryMaker( 'Events' ).leftJoin( attendanceTable,
                      'Attendance.event', '=', 'Events.id' ).select(
                        isAttending, "Events.*" ).toString();
    db.query( qstring, querycallback );
  }
}

module.exports = EventAttendance;
