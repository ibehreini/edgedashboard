var express = require('express');
var login = require('../models/login');

var router = express.Router();

router.get('/:username', (req, res) => {
	var username = req.params.username;
login.checkUser(username, (err, login) => {
    if (err)
      return res.json(err);
    return res.json(login);
  });
});

module.exports = router ;
