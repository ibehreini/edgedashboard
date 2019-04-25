const db = require('../database');

const querycallback = (err, res) =>
                          err.error ? callback( err ) : callback( res);

class Role
{
  static role( userKey, callback )
  {
    const qstring = db.queryMaker().select().from( 'Role' ).where(
                      'email', userKey ).toString();
    db.query( qstring, querycallback );
  }
  static addRole( userKey, role, callback )
  {
    const qstring = db.queryMaker().insert( {userKey, role} ).into( 'Role'
                      ).toString();
    db.query( qstring, querycallback );
  }
}

module.exports = Role;
