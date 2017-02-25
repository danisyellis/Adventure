//this isn't being used right now, but will be if I add a backend

var router = require("express").Router();

router.get("/", function(req, res) {
	res.send("I'm in routes/index.js")
});

module.exports = router;
