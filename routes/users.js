var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//include user model
var User = require('../models/user');
//include student model
var Student = require('../models/student');
//include Instructor model
var Instructor = require('../models/instructor');

/* users register */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});


//catch the form when its submitted
router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  var type = req.body.type;

  //form validation
  req.checkBody('email','Email is needed').notEmpty();
  req.checkBody('email','Email must be valid address').isEmail();
  req.checkBody('username','username is needed').notEmpty();
  req.checkBody('password','password is needed').notEmpty();
  req.checkBody('password2','passwords do not match').equals(req.body.password);

  errors = req.validationErrors();
  if(errors) {
   	res.render('users/register', {
   		errors: errors
  	});
  } else{
  	var  newUser = new User({
  		email: email,
    	username: username,
    	password: password,
    	type: type
    });

  if(type == 'student'){
  	console.log('Registering Student.....');
  	var newStudent = new Student({
  			email: email,
  			username: username
  	});

  	User.saveStudent(newUser, newStudent,function(err,user){
  		console.log('Student created');
  	});
  	}else{
  		console.log('Registering Instructor...');
  		var newInstructor = new Instructor({
  			email: email,
  			username: username
  	});

  	User.saveInstructor(newUser, newInstructor,function(err,user){
  		console.log('Instructor created');
  	});
    	}

  req.flash('success', 'User Added');
  res.redirect('/');

    }
});


module.exports = router;
