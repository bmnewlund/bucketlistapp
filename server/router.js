var Auth = require('./controllers/auth'); //Import from the controller's auth
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});


module.exports = function(app) { //module is a part of node and allows it to be exported
	app.get('/', requireAuth, function(req, res){
		res.send('Hello Homepage');
	});

	app.post('/signup', Auth.signup);
}