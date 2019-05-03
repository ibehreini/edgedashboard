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

router.post('/', (req, res) => {
  var email = req.body.email;
  var edgerole = req.body.edgerole;
  role.insert(email, edgerole, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.delete('/d/:email', (req, res) => {
  var email = req.params.email;
  console.log(email);
  role.delete(email, (err, result) => {
    console.log(email);
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.post('/u', (req, res) => {
  var email = req.body.email;
  var edgerole = req.body.edgerole;
  role.update(email, edgerole, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router ;
