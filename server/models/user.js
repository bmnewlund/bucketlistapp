var mongoose = require('mongoose'); //Importing mongoose
var Schema = mongoose.Schema; //Tells mongoose about particular fields in the model
var bcrypt = require('bcrypt-nodejs');


var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true //This converts everything to lowercase as mongo reads lower and upper case.
	},
	password: String
});

userSchema.pre('save', function(next){
	var user = this;

		bcrypt.genSalt(10, function(err, salt) {
			if(err) { return next(err); }

				bcrypt.hash(user.password, salt, null, function(err, hash){
					if (err) { return next(err); }

					user.password = hash;
					next();
				});
		});
});

var model = mongoose.model('user', userSchema); // This will actually create new users and load the Schema into Mongoose. This tells Mongoose that there is a new Schema called ‘userSchema’ which corresponds to a collection called 'user'(the first parameter).

module.exports = model;






