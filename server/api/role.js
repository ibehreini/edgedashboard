var express = require('express');
var role = require('../models/role');

var router = express.Router();

router.get('/', (req, res) => {
  role.retrieveAll((err, role) => {
      if (err)
        return res.json(err);
      return res.json(role);
    });
  
    
  });
  
  
router.get('/:email', (req, res) => {
  var email = req.params.email;
role.checkRole(email, (err, role) => {
    if (err)
      return res.json(err);
    return res.json(role);
  });
});
  
router.get('/check/:email', (req, res) => {
  var email = req.params.email;
role.checkUser(email, (err, role) => {
    if (err)
      return res.json(err);
    return res.json(role);
  });
});


module.exports = router ;
