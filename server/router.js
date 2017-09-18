module.exports = function(app) { //module is a part of node and allows it to be exported
	app.get('/', function(req, res, next){
		res.send("HELLO HOMEPAGE");
	});

	app.get('/signup', function(req, res, next){
		res.send("Hey folks, Thanks for signing up!");
	});
}