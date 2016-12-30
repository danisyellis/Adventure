//this isn't being used right now

var router = require("express").Router();

router.get("/", function(req, res) {
	res.send("I'm in routes/index.js")
});

module.exports = router;
