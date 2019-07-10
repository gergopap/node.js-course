var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function (err, client) {
  let db = client.db('EmployeeDB');
  db.collection('EmployeeDB').deleteOne
  ({"EmployeeName": "Mohan"});
});
