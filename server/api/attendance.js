var express = require('express');
var attendance = require('../models/attendance');

var router = express.Router();

router.get('/', (req, res) => {
attendance.retrieveAll((err, attendance) => {
    if (err)
      return res.json(err);
    return res.json(attendance);
  });
});

router.get( '/:user', (req, res) => {
  table.attendingIds( req.params.user, (err, events) => {
      if (err)
        return res.json(err);
      return res.json(events);
    });
});

router.get('/time/:eventtime', (req, res) => {
	var eventtime = req.params.eventtime;
attendance.retrieveAttending(eventtime, (err, attendance) => {
    if (err)
      return res.json(err);
    return res.json(attendance);
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

module.exports = router ;
