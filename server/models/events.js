const db = require('../database');

const querycallback = (err, res) => {
  if (err.error)
    return callback(err);
  callback(res);
}
const table = db.queryMaker( 'Events' );

class Events {
  static retrieveAll (callback)
  {
    db.query('SELECT * from events', querycallback );
  }

  static retrieveAllWorkshops ( callback) {
    db.query( 'SELECT title, id from events where eventtype = \'workshop\'',
              querycallback );
  }

  static retrieveAllEvents (wStr, callback) {
    db.query( 'SELECT title, id from events where eventtype = \'event\'',
              querycallback);
  }

  static retrieveNext( toDate, callback )
  {
    const qstring = table.select().whereBetween( 'eventtime',
                      [ db.queryMaker.fn.now(), toDate ] )
  }

  static retrieveNextFew (callback) {
    db.query('SELECT * from events where eventtime > now() limit 4', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert( eventtime, eventtype, eventlocation, title, description,
                 callback )
  {
    const qstring = table.insert( { 'eventTime': eventtime,
                                    'eventType': eventtype,
                                    'eventLocation': eventlocation,
                                    'title': title,
                                    'description': description } ).toString();
    db.query( qstring, querycallback );
  }
}

module.exports = Events;
