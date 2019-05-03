var express = require('express');
var mentorhours = require('../models/mentorhours');

var router = express.Router();

router.get('/', (req, res) => {
    mentorhours.retrieveAll((err, role) => {
        if (err)
          return res.json(err);
        return res.json(role);
      });
    
      
    });
  
router.post('/hours', (req, res) => {
  var username = req.body.username;
  var period = req.body.period;
  var hours = req.body.hours;
  var justification = req.body.justification;
  var notes = req.body.notes;
  mentorhours.insertHours(username, period, hours, justification, notes, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router ;
