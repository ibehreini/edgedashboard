var express = require('express');
var events = require('../models/events');

var router = express.Router();

router.get('/', (req, res) => {
events.retrieveAll((err, events) => {
    if (err)
      return res.json(err);
    return res.json(events);
  });


});

router.get('/w', (req, res) => {
  events.retrieveAllWorkshops('workshop', (err, events) => {
      if (err)
        return res.json(err);
      return res.json(events);
    });
  });

router.post('/', (req, res) => {
  var event = req.body.event;
  var evdate = req.body.evdate

  events.insert(event, evdate, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
