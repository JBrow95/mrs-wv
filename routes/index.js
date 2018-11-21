var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index');
});

router.get('/other_page', function(req, res, next){
  res.render('other_page');
});

router.post('/this_happens', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
