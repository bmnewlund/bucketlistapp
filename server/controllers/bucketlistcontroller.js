var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	//For Postman use
	//var title = req.body.title;
	var title = req.body.props.title;
	var topic = req.body.props.topic;
	var url = req.body.props. url;
	var content = req.bodyprops.content;
	var specificUser = req.user;

	var BucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if(err) { return next(err); }
		res.json(bucketList);
	});
}