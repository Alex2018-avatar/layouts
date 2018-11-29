var express = require('express');
const request = require('request');
const fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
	

	let menudata = fs.readFileSync('data.json', "utf8");
	let json = JSON.parse(menudata)
	//console.log(menudata)
  res.render('users', {
		title: 'User page',
		drinks: json
	})
});


module.exports = router;
