var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';

MongoClient.connect(url, function (err, client) {
  var db = client.db('EmployeeDB');
  var cursor = db.collection('EmployeeDB').find();

  cursor.forEach(function (doc) {
    console.log(doc);
  });
});
