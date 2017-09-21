var Auth = require('./controllers/auth'); //Import from the controller's auth
require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});


module.exports = function(app) { //module is a part of node and allows it to be exported
	app.get('/', requireAuth, function(req, res){
		res.send({message: 'hey'});
	});

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
}

