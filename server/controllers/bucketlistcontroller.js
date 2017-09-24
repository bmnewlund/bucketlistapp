var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){  
    //For Postman use
    //var title = req.body.title;    
    var title = req.body.title;
    var topic = req.body.topic;
    var url = req.body.url;
    var content = req.body.content;
    var specificUser = req.user._id;

    var bucketList = new BucketList({
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


exports.fetchBucketLists = function(req, res) {
  var specificUser = req.user._id;
  BucketList.find({specificUser: specificUser})
  .then(
    function fetchSuccess(data) {
      res.json(data);
    },
    function fetchError(err) {
      res.send(500, err.message);
    }
  );
}

exports.fetchBucketList = function(req, res) {
  var specificBucketList = re.params.id;
  BucketList.findOne({_id: specificBucketList})
    .then(
      function fetchSuccess(data) {
        res.json(data);
      },
      function fetchError(err) {
        res.send(500, err.message);
      } 
    );
}

exports.deleteBucketList = function(req, res) {
  var specificBucketList = req.params.id;
  BucketList.remove({_id: specificBucketList})
    .then(
      function deleteSuccess(data) {
        res.json(data);
      },
      function deleteError(err) {
        res.send(500, err.message);
      }
    );
}

