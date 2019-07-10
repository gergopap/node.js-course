var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url)
  .then(function (err, db) {
    db.collection('Employee').updateOne({
      "EmployeeName": "Martin"
    }, {
        $set: {
          "EmployeeName": "Mohan"
        }
      });
  });
