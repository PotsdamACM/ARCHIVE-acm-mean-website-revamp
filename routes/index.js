var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/friends', function(req, res) {
  res.render('friends');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/focusgroups', function(req, res) {
  res.render('focusgroups');
})

module.exports = router;
