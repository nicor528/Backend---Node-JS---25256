var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('obtenemos todos los productos');
});

module.exports = router;