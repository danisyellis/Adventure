//this file never gets looked at


var express = require('express');
var browserApp = express();
var path = require('path');

   /*
     This middleware will catch any URLs resembling a file extension
     for example: .js, .html, .css
     This allows for proper 404s instead of the wildcard '/*' catching
     URLs that bypass express.static because the given file does not exist.
     */
browserApp.use(function (req, res, next) {
	if (path.extname(req.path).length > 0) {
		res.status(404).end();
	} else {
		next(null);
	}
});

browserApp.get("/*", function(req, res) {
	res.sendFile(__dirname + 'pageOne/pageOne.html');
});

    // Error catching endware.
browserApp.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

module.exports = browserApp;
