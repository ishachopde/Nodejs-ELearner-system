var mongoose = require('mongoose');

//class schema

var ClassSchema = mongoose.Schema({
	title:
	{
		type: String
	},
	description:
	{
		type: String
	},
	instructor:
	{
		type: String
	},

	lessons:[{
		lesson_number: {type: Number},
		lesson_title: {type: String},
		lesson_body: {type: String}
	}]
	
});

//to make it available outside

var Class = module.exports = mongoose.model('Class',ClassSchema);

//fetch all classes
module.exports.getClasses = function (callback, limit) {
	Class.find(callback).limit(limit);
	// body...
}

//fetch single class
module.exports.getClasdById = function(id,callback){
	Class.findById(id,callback);
}