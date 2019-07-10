var fs = require("fs");
var stream;
stream = fs.createReadStream("/home/g/Asztal/data.txt");

stream.on("data", function (data) {
  var chunk = data.toString();
  console.log(chunk);
}); 
