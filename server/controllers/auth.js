var User = require('../models/user');

exports.signup = function(req, res, next){
	//1
	var email = req.body.email;
	var password = req.body.password;
	//2
	User.findOne({ email: email }, function(err, existingUser){ //looking through the database and looking for the one instance with that specifice email address.
		if(err) {
			return next(err);
		}//handle search error

		if(existingUser){
			// return res.status(418).send(err);
			return res.status(418).send("email is in use");
		}//handles existing users
		//3
		var user = new User({
			email: email,
			password: password
		});

		//To save the record to the DB.
		user.save(function(err){
			if(err) { return next(err); }
			//4 Respond to request indicating the user was created
			res.json({success: true});
		});
	});
}


//This is the controller that handles the authentication 
// when a user is signing up or signing out. 
exports.signup = function(req, res, next) {
	//Test
	// res.send("authorization is happening, yo");
	console.log(req.body); //This is an express middleware function allow to easily pull apart an incoming request.
}