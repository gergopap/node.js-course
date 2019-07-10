var fs = require("fs");
var stream;
stream = fs.createWriteStream("/home/g/Asztal/data2.txt");

stream.write("Tutorial on Node.js")
stream.write("Introduction")
stream.write("Events")
stream.write("Generators")
stream.write("Data Connectivity")
stream.write("Using Jasmine") 
