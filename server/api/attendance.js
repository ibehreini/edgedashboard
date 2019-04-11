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

router.get('/time/:eventtime', (req, res) => {
	var eventtime = req.params.eventtime;
attendance.retrieveAttending(eventtime, (err, attendance) => {
    if (err)
      return res.json(err);
    return res.json(attendance);
  });  
});

module.exports = router;