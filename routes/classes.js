var express = require('express');
var router = express.Router();

var Class = require('../models/class');


/* GET classes page */
router.get('/', function(req, res, next) {
	Class.getClasses(function(err,classes) {
		// body...
		if(err) throw err;
		res.render('classes/index', { classes : classes });
	},3);
  
});

//get class details
router.get('/:id/details', function(req, res, next) {
	Class.getClassesById([req.params.id], function(err,classname) {
		// body...
		if(err) throw err;
		res.render('classes/details', { class : classname });
	});
  
});

module.exports = router;
