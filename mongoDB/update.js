var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';

MongoClient.connect(url, function (err, client) {
  var db = client.db('EmployeeDB')
  db.collection('EmployeeDB').updateOne({
    "EmployeeName": "NewEmployee"
  }, {
      $set: {
        "EmployeeName": "Mohan"
      }
    });
});
