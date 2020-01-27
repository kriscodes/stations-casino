var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    let users = [];
    json.map(user => {
      const u = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        address: user.address,
        visible: true
      };
      users.push(u);
    });
    res.json(users);
  } catch(er) {
    console.log(er);
    res.status(500).send(er.message);
  }
});

module.exports = router;
