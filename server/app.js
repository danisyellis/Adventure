var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var morgan = require("morgan");
var path = require("path");


//logging
app.use(morgan('dev'));
//parsing the body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//look for files in public and node_modules first
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../browser')));

// use this when I add a favicon :-) app.use(favicon(__dirname + '../public/favicon.ico'));


   /*
     This middleware will catch any URLs resembling a file extension
     for example: .js, .html, .css
     This allows for proper 404s instead of the wildcard '/*' catching
     URLs that bypass express.static because the given file does not exist.
     */
app.use(function (req, res, next) {
	if (path.extname(req.path).length > 0) {
		res.status(404).end();
	} else {
		next(null);
	}
});

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, '../browser/index.html'));
});

    // Error catching endware.
app.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
//var server =
app.listen(3000, function() {console.log("I'm listening...")});


//If I decide to add sessions,  use cookie-parser. Put it before any other middleware

//here's a slightly different way to start the server, if I'm worried I'm not using http, but pretty sure I am, just leaving it here for a sec

// var server = require('http').createServer()
//     server.on('request', app); // Attach the Express application.

// server.listen(3000, function() {console.log("I'm listening...")});
