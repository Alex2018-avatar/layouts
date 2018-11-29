var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let menudata = fs.readFileSync('data.json',"utf8");
  res.render('index', {
   extractScripts: true, 
   title: 'Express',
    drinks: JSON.parse(menudata)
 });
});


module.exports = router;
