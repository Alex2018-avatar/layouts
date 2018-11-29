'use strict'

const request = require('request');
const fs = require('fs');

const readMenufs = (req, res, next) => {
	console.log('Setting up a 60-minute interval. It is now %s', (new Date()));

	setInterval(function () {
		console.log('60-minute interval trigger! It is now %s', (new Date()));
		
		let url = 'http://localhost/search/resources/store/10151/categoryview/@top?depthAndLimit=-1,-1,-1,-1';
		let options = {
			url: url,
			json: true
		}
		let menu = getMenu(options);
		menu.then((results) => {
			fs.writeFileSync('data.json', JSON.stringify(results, null, 4), { encoding: 'utf8' });
		})
		.catch((err) => {
			throw new Error('Higher-level error. ' + err.message);
		});
	}, 1000 * 60 * 10);

	console.log('BOOTED');
}

async function getMenu(options) {
	return await new Promise(function (resolve, reject) {
		request.get(options, (err, resp, body) => {
			if (err) {
				reject(err);
			} else {
				resolve(body);
			}

		})

	})

};
module.exports = {
	readMenufs
}