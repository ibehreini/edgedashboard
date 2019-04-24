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

router.get('/e', (req, res) => {
  events.retrieveAllEvents('event', (err, events) => {
      if (err)
        return res.json(err);
      return res.json(events);
    });
  });

router.post('/', (req, res) => {
  var eventtime = req.body.eventtime;
  var eventtype = req.body.eventtype;
  var eventlocation = req.body.eventlocation;
  var title = req.body.title;
  var description = req.body.description;
  events.insert(eventtime, eventtype, eventlocation, title, description, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
