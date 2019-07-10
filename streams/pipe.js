var fs = require("fs");
var readStream = fs.createReadStream("/home/g/Asztal/data.txt");
var writeStream = fs.createWriteStream("/home/g/Asztal/dataoutput.txt");

readStream.pipe(writeStream);
