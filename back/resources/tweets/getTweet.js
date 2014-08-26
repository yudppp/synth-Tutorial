var pmongo = require('promised-mongo');
exports.get = function (req, res) {
  var id = req.params.id;
  return req.db.collection('tweets').findOne({
    _id: pmongo.ObjectId(id)
  }).then(function (data) {
    return {
      tweet: data
    };
  });
};
