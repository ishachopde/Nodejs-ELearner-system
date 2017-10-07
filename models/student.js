var mongoose = require('mongoose');

//student schema

var StudentSchema = mongoose.Schema({
	first_name:
	{
		type: String
	},
	last_name:
	{
		type: String
	},
	address:
	[{
		street_address: {type: String},
		city: {type: String},
		state: {type: String},
		zip: {type: String}
		
	}],
	username:
	{
		type: String
	},
	email:
	{
		type: String
	},
	classes:[{
		class_id: {type: [mongoose.Schema.Types.ObjectId]},
		class_title: {type: String}
		
	}]
	
});

//to make it available outside

var Student = module.exports = mongoose.model('Student',StudentSchema);