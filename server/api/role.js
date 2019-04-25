var express = require('express');
var role = require('../models/role');

var router = express.Router();

router.get('/:email', (req, res) => {
	var email = req.params.email;
role.checkUser(email, (err, role) => {
    if (err)
      return res.json(err);
    return res.json(role);
  });
});

module.exports = router ;
