var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';
var str = "";

app.route('/Employeeid').get(function (req, res) {
  MongoClient.connect(url, function (err, client) {
    var db = client.db('EmployeeDB');
    var cursor = db.collection('EmployeeDB').find();
    //noinspection JSDeprecatedSymbols
    cursor.each(function (err, item) {
      if (item != null) {
        str = str + "    Employee id  " + item.Employeeid + "</br>";
      }
    });
    res.send(str);
    db.close();
  });
});

app.listen(3000);
