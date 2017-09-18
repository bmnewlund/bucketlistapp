var Auth = require('./controllers/auth'); //Import from the controller's auth
var User = require('./models/user'); //Import from model's user


module.exports = function(app) { //module is a part of node and allows it to be exported
	app.post('/signup', Auth.signup);
}