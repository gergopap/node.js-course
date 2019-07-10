var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function (err, db) {

  console.log('connected');
  db.close();
});
