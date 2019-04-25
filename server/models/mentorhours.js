const db = require('../database');

const querycallback = (err, res) =>
                          err.error ? callback( err ) : callback( res);
const table = db.queryMaker( 'MentorHours' );

class MentorHours
{
  /*This is probably not what any user wants to see, as it is not filtered by
   *date at all, but is provided here just in case.*/
  static retrieveAll( callback )
  {
    const qstring = table.select();
    db.query( qstring, querycallback );
  }
  static retrievePeriod( periodDate, callback )
  {
    const qstring = table.select().where( 'period', periodDate ).toString();
    db.query( qstring, querycallback );
  }
  static retrievePeriodRange( fromDate, toDate, callback )
  {
    const qstring = table.select().whereBetween( 'period', [fromDate, toDate]
                        ).toString();
    db.query( qstring, querycallback );
  }
  static retrieveByMentor( userKey, fromDate, toDate, callback )
  {
    const qstring = table.select().whereBetween( 'period', [fromDate, toDate]
                      ).andWhere( 'username', userKey ).toString();
    db.query( qstring, querycallback );
  }
  static newEntry( userKey, periodDate, hours, justification, notes )
  {
    const qstring = table.insert( {userKey, periodDate, hours, justification,
                                  notes} ).toString();
    db.query( qstring, querycallback );
  }
  /*Only put the key-value pairs in the field object if they are one of the
   * fields to be updated.  If a field that is not in the expected schema is
   * passed in, an error will be thrown. TODO spec error*/
  static updateEntry( userKey, periodDate, fields )
  {
    //TODO
    db.query( qstring, querycallback );
  }
}
