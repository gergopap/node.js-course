var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/EmployeeDB';

MongoClient.connect(url, function (err, client) {
  var db = client.db('EmployeeDB');
  console.log('connected');
  db.close();
});
