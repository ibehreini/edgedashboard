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

router.get('/time/:event', (req, res) => {
	var event = req.params.event;
attendance.retrieveAttending(event, (err, attendance) => {
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

module.exports = router ;
