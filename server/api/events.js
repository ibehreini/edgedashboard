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
  events.retrieveAllEvents('Event', (err, events) => {
      if (err)
        return res.json(err);
      return res.json(events);
    });
  });

router.post('/', (req, res) => {
  var eventdate = req.body.eventdate;
  var eventtype = req.body.eventtype;
  var eventlocation = req.body.eventlocation;
  var title = req.body.title;
  var description = req.body.description;
  events.insert(eventdate, eventtype, eventlocation, title, description, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
