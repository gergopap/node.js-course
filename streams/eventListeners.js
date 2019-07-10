var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('data_received', function () { });
emitter.on('data_received', function () { });

console.log(events.eventEmitter.listenerCount(emitter, 'data_received'));
