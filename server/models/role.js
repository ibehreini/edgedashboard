const db = require('../database');

const querycallback = (err, res) =>
                          err.error ? callback( err ) : callback( res),
      table = db.queryMaker( 'Role' );

class Role
{
  static usersByRole( role, callback )
  {
    const qstring = table.select().where( 'role', role ).toString();
    db.query( qstring, querycallback );
  }
  static allUsers( callback )
  {
    const qstring = table.select().toString();
    db.query( qstring, querycallback );
  }
  static role( userKey, callback )
  {
    const qstring = table.select().where( 'email', userKey ).toString();
    db.query( qstring, querycallback );
  }
  static addRole( userKey, role, callback )
  {
    const qstring = table.insert( {userKey, role} ).into( 'Role' ).toString();
    db.query( qstring, querycallback );
  }
}

module.exports = Role;
