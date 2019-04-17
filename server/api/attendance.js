var express = require('express');
var table = require('../models/attendance');

var router = express.Router();

router.get( '/:user', (req, res) => {
  table.attendingIds( req.params.user, (err, events) => {
      if (err)
        return res.json(err);
      return res.json(events);
    });
});

router.post( '/', (req, res) => {
  console.log( req );
  const reqbody = req.body
  table.insert( reqbody.event,
                reqbody.user,
                reqbody.transportation,
                reqbody.notes,
                (err, result) => {
                  if (err)
                    return res.json(err);
                  return res.json(result);
                } );
  res.send('received POST data: ' + req.body.data );
} );
