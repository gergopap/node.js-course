function Timedealay (ptime, callback) {
  setTimeout(function () {
    callback("Pausing for " + ptime);
    
  }, time);
}

/*
Timedealay(1000, function(messege) {
  console.log(msg);
  Timedealay(2000, function(messege) {
    console.log(msg);
    Timedealay(3000, function(messege) {
      console.log(msg);
    });
  });
});
*/

function * Messages () {
  console.log(yield (Timedelay(1000, function () {})));
  console.log(yield (Timedelay(2000, function () {})));
  console.log(yield (Timedelay(3000, function () {})));
}
