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

router.get('/time/:event', (req, res) => {
	var event = req.params.event;
attendance.retrieveAttending(event, (err, attendance) => {
    if (err)
      return res.json(err);
    return res.json(attendance);
  });
});

router.get('/status/:username', (req, res) => {
  var username = req.params.username;
attendance.checkSignUpStatus(username, (err, attendance) => {
    if (err)
      return res.json(err);
    return res.json(attendance);
  });
});


router.post('/attending', (req, res) => {
  var event = req.body.event;
  var username = req.body.username;
  var transportneeds = req.body.transportneeds;
  var notes = req.body.notes;
  attendance.insertAttending(event, username, transportneeds, notes, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
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
