const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('data', function(data){
  console.log("some data received", data);
})

emitter.emit('data', {name:"Shanur"})
