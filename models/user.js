var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//user schema
var UserSchema = mongoose.Schema({
	username:
	{
		type: String
	},
	email:
	{
		type: String
	},
	password:
	{
		type: String,
		bcrypt: true
	},
	type:{
		type: String
	}
	
});

// make available outside
var User = module.exports = mongoose.model('User', UserSchema);

//get a user by id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);

}

//get a user by username
module.exports.getUserByUserName = function(username, callback){
	var query = {username : username};
	User.findOne(query, callback);

}

//compare password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword,hash,function(err,isMatch){
			if(err) throw err1
			callback(null, isMatch);
			
	});
}

//create a student user
module.exports.saveStudent = function(newUser, newStudent, callback){
	bcrypt.hash(newUser.password,10,function(err,hash){
			if(err) throw err1
				//set hash
			newUser.password = hash;
			console.log('Student is being saved');
			async.parallel([newUser.save, newStudent.save], callback);

	});
}

	//create instructors
module.exports.saveInstructor = function(newUser, newInstructor, callback){
	bcrypt.hash(newUser.password,10,function(err,hash){
			if(err) throw err1
				//set hash
			newUser.password = hash;
			console.log('Instructor is being saved');
			async.parallel([newUser.save, newInstructor.save], callback);

	
});
}

