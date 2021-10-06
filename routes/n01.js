var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('noticias/01/index', { title: 'Express' });
});

module.exports = router;
